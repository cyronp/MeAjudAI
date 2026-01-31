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

const reportData = {}

const categoryConfig = {
  "Casa & Contas fixas": { icon: Home, color: "bg-blue-500" },
  Mercado: { icon: ShoppingCart, color: "bg-emerald-500" },
  Alimentação: { icon: Utensils, color: "bg-amber-500" },
  Transporte: { icon: Car, color: "bg-purple-500" },
  Saúde: { icon: Heart, color: "bg-red-500" },
  Compras: { icon: ShoppingBag, color: "bg-pink-500" },
  "Lazer & Entretenimento": { icon: Film, color: "bg-cyan-500" },
  Educação: { icon: GraduationCap, color: "bg-indigo-500" },
  Outros: { icon: MoreHorizontal, color: "bg-slate-500" },
  Financeiro: { icon: TrendingUp, color: "bg-emerald-600" },
};

export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-4">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl p-4 md:p-6 my-4 border border-gray-200">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Relatório financeiro
          </h1>
          <p className="text-gray-600">
            {reportData.month} de {reportData.year}
          </p>
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
              <div className="inline-flex gap-2 py-4">
                <div className="bg-amber-700/50 rounded-full w-12 h-12 items-center justify-center flex">
                  <Lightbulb className="text-yellow-200" />
                </div>
                <h1 className="text-2xl text-gray-900">Dicas financeiras</h1>
              </div>
              <p className="text-gray-600">{reportData.hints}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
