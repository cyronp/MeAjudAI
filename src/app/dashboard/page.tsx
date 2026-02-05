"use client";

import DashCard from "@/src/components/card";
import {
  Home,
  ShoppingCart,
  Utensils,
  Car,
  Heart,
  ShoppingBag,
  Film,
  GraduationCap,
  MoreHorizontal,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/src/components/ui/chart";
import { Pie, PieChart, Cell } from "recharts";

const chartConfig = {
  "Casa & Contas fixas": {
    label: "Casa & Contas fixas",
    color: "#3b82f6",
  },
  Mercado: {
    label: "Mercado",
    color: "#10b981",
  },
  Alimentação: {
    label: "Alimentação",
    color: "#f59e0b",
  },
  Transporte: {
    label: "Transporte",
    color: "#4d0218",
  },
  Saúde: {
    label: "Saúde",
    color: "#ef4444",
  },
  Compras: {
    label: "Compras",
    color: "#ec4899",
  },
  "Lazer & Entretenimento": {
    label: "Lazer & Entretenimento",
    color: "#06b6d4",
  },
  Educação: {
    label: "Educação",
    color: "#6366f1",
  },
  Outros: {
    label: "Outros",
    color: "#64748b",
  },
  Financeiro: {
    label: "Financeiro",
    color: "#059669",
  },
} satisfies ChartConfig;

type ReportData = {
  month: string;
  year: string;
  report: {
    [key: string]: {
      total: string;
      transactions: {
        date: string;
        transaction: string;
        value: string;
        payment_method: string;
      }[];
    };
  };
  total_expenses: string;
  total_income: string;
  how_good_status: string;
  how_good_description: string;
  hints: string;
};

const categoryConfig = {
  "Casa & Contas fixas": { icon: Home, color: "bg-blue-500" },
  Mercado: { icon: ShoppingCart, color: "bg-emerald-500" },
  Alimentação: { icon: Utensils, color: "bg-amber-500" },
  Transporte: { icon: Car, color: "bg-rose-950" },
  Saúde: { icon: Heart, color: "bg-red-500" },
  Compras: { icon: ShoppingBag, color: "bg-pink-500" },
  "Lazer & Entretenimento": { icon: Film, color: "bg-cyan-500" },
  Educação: { icon: GraduationCap, color: "bg-indigo-500" },
  Outros: { icon: MoreHorizontal, color: "bg-slate-500" },
  Financeiro: { icon: TrendingUp, color: "bg-emerald-600" },
};

export default function Dashboard() {
  const [reportData, setReportData] = useState<ReportData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem("reportData");

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setReportData(parsedData);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        router.push("/");
      }
    } else {
      router.push("/");
    }
  }, [router]);

  if (!reportData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando relatório...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-4">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl p-4 md:p-6 my-4 border border-gray-200">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Relatório financeiro
            </h1>
            <p className="text-gray-600">
              {reportData.month} de {reportData.year}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(reportData.report).map(([category, data]) => {
            const config =
              categoryConfig[category as keyof typeof categoryConfig];
            return (
              <DashCard
                key={category}
                title={category}
                icon={config.icon}
                themeColor={config.color}
                categoryData={data}
              />
            );
          })}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Gráfico de porcentagem de despesas
          </h2>
          <div className="flex flex-col items-center">
            <ChartContainer
              config={chartConfig}
              className="min-h-[270px] sm:min-h-[350px] w-full max-w-[280px] sm:max-w-[400px]"
            >
              <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                  label={({ value,percent }) => `${(percent * 100).toFixed(1)}%`}
                  outerRadius="70%"
                  data={Object.entries(reportData.report)
                    .filter(([_, data]) => Number(data.total) < 0)
                    .map(([category, data]) => ({
                      name: category,
                      value: Math.abs(Number(data.total)),
                      fill:
                        chartConfig[category as keyof typeof chartConfig]
                          ?.color || "#64748b",
                    }))}
                  dataKey="value"
                  nameKey="name"
                >
                  {Object.entries(reportData.report)
                    .filter(([_, data]) => Number(data.total) < 0)
                    .map(([category], index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          chartConfig[category as keyof typeof chartConfig]
                            ?.color || "#64748b"
                        }
                      />
                    ))}
                </Pie>
              </PieChart>
            </ChartContainer>

            <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-1 w-full max-w-[400px]">
              {Object.entries(reportData.report)
                .filter(([_, data]) => Number(data.total) < 0)
                .map(([category]) => (
                  <div key={category} className="flex items-center gap-1">
                    <div
                      className="w-4 h-4 rounded-sm shrink-0"
                      style={{
                        backgroundColor:
                          chartConfig[category as keyof typeof chartConfig]
                            ?.color || "#64748b",
                      }}
                    />
                    <span className="text-sm text-gray-700">{category}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Resumo Geral
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total de Ganhos:</span>
              <span className="text-2xl font-bold text-emerald-700">
                R$ {reportData.total_income}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total de Gastos:</span>
              <span className="text-2xl font-bold text-red-800">
                R$ {reportData.total_expenses}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Status:</span>
              <span
                className={`font-semibold px-3 py-1 rounded ${
                  reportData.how_good_status === "ÓTIMO"
                    ? "bg-green-100 text-green-800"
                    : reportData.how_good_status === "MODERADO"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {reportData.how_good_status}
              </span>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <p className="text-gray-700 mb-2">
                {reportData.how_good_description}
              </p>
              <div className="inline-flex gap-2 py-4 items-center">
                <div className="bg-amber-700/50 rounded-full w-12 h-12 items-center justify-center flex">
                  <Lightbulb className="text-yellow-200" />
                </div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dicas financeiras
                </h1>
              </div>
              <p className="text-gray-600">{reportData.hints}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
