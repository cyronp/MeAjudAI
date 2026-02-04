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

const reportData = {
  month: "Janeiro",
  year: "2026",
  report: {
    "Casa & Contas fixas": {
      total: "+0.00",
      transactions: [],
    },
    Mercado: {
      total: "-943.74",
      transactions: [
        {
          date: "08/01/2026",
          transaction: "KunzSupermercados",
          value: "-101.45",
          payment_method: "Débito",
        },
        {
          date: "08/01/2026",
          transaction: "MERCADO BRASILIA",
          value: "-88.75",
          payment_method: "Débito",
        },
        {
          date: "10/01/2026",
          transaction: "Marcia Stela Suchek Schwarz",
          value: "-75.00",
          payment_method: "Pix",
        },
        {
          date: "12/01/2026",
          transaction: "SUPERMERCADO ECONOMIA",
          value: "-111.68",
          payment_method: "Débito",
        },
        {
          date: "13/01/2026",
          transaction: "E.M.M. COMERCIO DE ALI",
          value: "-147.13",
          payment_method: "Débito",
        },
        {
          date: "13/01/2026",
          transaction: "E.M.M. COMERCIO DE ALI",
          value: "-20.23",
          payment_method: "Débito",
        },
        {
          date: "14/01/2026",
          transaction: "E.M.M. COMERCIO DE ALI",
          value: "-10.99",
          payment_method: "Débito",
        },
        {
          date: "20/01/2026",
          transaction: "SUPERMERCADO ECONOMIA",
          value: "-12.98",
          payment_method: "Débito",
        },
        {
          date: "26/01/2026",
          transaction: "E.M.M. COMERCIO DE ALI",
          value: "-104.82",
          payment_method: "Débito",
        },
        {
          date: "28/01/2026",
          transaction: "Acougue e Mercearia Padilha Ltda",
          value: "-109.32",
          payment_method: "Pix",
        },
        {
          date: "29/01/2026",
          transaction: "ATACAREJO COOPER",
          value: "-161.39",
          payment_method: "Débito",
        },
      ],
    },
    Alimentação: {
      total: "-271.51",
      transactions: [
        {
          date: "07/01/2026",
          transaction: "PANIFICADORA PRINCESA LTDA",
          value: "-30.00",
          payment_method: "Pix",
        },
        {
          date: "08/01/2026",
          transaction: "CONFEITARIA SEMENTE DA",
          value: "-59.22",
          payment_method: "Débito",
        },
        {
          date: "12/01/2026",
          transaction: "ARMAZEM DO PAO LTDA",
          value: "-39.47",
          payment_method: "Débito",
        },
        {
          date: "15/01/2026",
          transaction: "Panificadora",
          value: "-59.28",
          payment_method: "Débito",
        },
        {
          date: "16/01/2026",
          transaction: "Panificadora",
          value: "-20.90",
          payment_method: "Débito",
        },
        {
          date: "26/01/2026",
          transaction: "sorvetegaroto",
          value: "-10.50",
          payment_method: "Débito",
        },
        {
          date: "26/01/2026",
          transaction: "Panificadora",
          value: "-52.14",
          payment_method: "Débito",
        },
      ],
    },
    Transporte: {
      total: "-14.75",
      transactions: [
        {
          date: "26/01/2026",
          transaction: "POSTO GUAIRA LTDA",
          value: "-14.75",
          payment_method: "Débito",
        },
      ],
    },
    Saúde: {
      total: "-16.90",
      transactions: [
        {
          date: "15/01/2026",
          transaction: "FARMACIA PRECO POPULAR",
          value: "-16.90",
          payment_method: "Débito",
        },
      ],
    },
    Compras: {
      total: "-298.44",
      transactions: [
        {
          date: "10/01/2026",
          transaction: "HNA*OBOTICARIO",
          value: "-63.00",
          payment_method: "Débito",
        },
        {
          date: "25/01/2026",
          transaction: "SHPP BRASIL INSTITUICAO DE PAG",
          value: "-146.89",
          payment_method: "Pix",
        },
        {
          date: "27/01/2026",
          transaction: "SHPP BRASIL INSTITUICAO DE PAG",
          value: "-88.55",
          payment_method: "Pix",
        },
      ],
    },
    "Lazer & Entretenimento": {
      total: "+0.00",
      transactions: [],
    },
    Educação: {
      total: "+0.00",
      transactions: [],
    },
    Outros: {
      total: "+4764.78",
      transactions: [
        {
          date: "02/01/2026",
          transaction: "Alcelir Teixeira Alano Constantino",
          value: "-60.00",
          payment_method: "Pix",
        },
        {
          date: "03/01/2026",
          transaction: "Vitor Henrique da Silveira Alano",
          value: "-60.00",
          payment_method: "Pix",
        },
        {
          date: "07/01/2026",
          transaction: "EDUARDO DIAS DE OLIVEIRA",
          value: "+3500.00",
          payment_method: "Pix",
        },
        {
          date: "07/01/2026",
          transaction: "Turia Cristina da Silveira Morais Barbosa",
          value: "-870.00",
          payment_method: "Pix",
        },
        {
          date: "07/01/2026",
          transaction: "Luana Baia 09022855996",
          value: "-100.00",
          payment_method: "Pix",
        },
        {
          date: "08/01/2026",
          transaction: "Vitor Henrique da Silveira Alano",
          value: "-31.00",
          payment_method: "Pix",
        },
        {
          date: "08/01/2026",
          transaction: "Du Tintas Automotivas Ltda",
          value: "+1351.00",
          payment_method: "Pix",
        },
        {
          date: "09/01/2026",
          transaction: "Viviane da Silva Bueno",
          value: "-85.00",
          payment_method: "Pix",
        },
        {
          date: "09/01/2026",
          transaction: "Talita Aparecida Pilarski",
          value: "-270.00",
          payment_method: "Pix",
        },
        {
          date: "09/01/2026",
          transaction:
            "ASSOCIACAO FRADA FRENTE DE ACAO PELOS DIREITOS DOS ANIMAIS",
          value: "-10.00",
          payment_method: "Pix",
        },
        {
          date: "10/01/2026",
          transaction: "46.274.214 ANDRE KALEBE CARTAPASSO",
          value: "-86.90",
          payment_method: "Pix",
        },
        {
          date: "11/01/2026",
          transaction: "FERNANDA LESCOWICZ",
          value: "+65.00",
          payment_method: "Pix",
        },
        {
          date: "11/01/2026",
          transaction: "Clarisse da Silva Teixeira",
          value: "+17.90",
          payment_method: "Pix",
        },
        {
          date: "12/01/2026",
          transaction: "Luiz Cesar Girolla",
          value: "-100.00",
          payment_method: "Pix",
        },
        {
          date: "13/01/2026",
          transaction: "MP *DUTINTASAUTOM",
          value: "-1.00",
          payment_method: "Débito",
        },
        {
          date: "13/01/2026",
          transaction: "EDUARDO DIAS DE OLIVEIRA",
          value: "+500.00",
          payment_method: "Pix",
        },
        {
          date: "14/01/2026",
          transaction: "BICHOS DO BAIRRO",
          value: "-12.00",
          payment_method: "Débito",
        },
        {
          date: "15/01/2026",
          transaction: "Ana Carolina Dal Bello",
          value: "-180.00",
          payment_method: "Pix",
        },
        {
          date: "16/01/2026",
          transaction: "SCHIRLEY MATOS PEREIRA",
          value: "-10.00",
          payment_method: "Pix",
        },
        {
          date: "16/01/2026",
          transaction: "Viviane da Silva Bueno",
          value: "-85.00",
          payment_method: "Pix",
        },
        {
          date: "16/01/2026",
          transaction: "KUNKUNKA LL",
          value: "-11.49",
          payment_method: "Débito",
        },
        {
          date: "17/01/2026",
          transaction: "ACAPEL COMERCIO DE PAP",
          value: "-10.85",
          payment_method: "Débito",
        },
        {
          date: "17/01/2026",
          transaction: "FERNANDA LESCOWICZ",
          value: "-24.65",
          payment_method: "Pix",
        },
        {
          date: "19/01/2026",
          transaction: "Talita Aparecida Pilarski",
          value: "-9.50",
          payment_method: "Pix",
        },
        {
          date: "20/01/2026",
          transaction: "Nelci Tavares de Oliveira",
          value: "-10.00",
          payment_method: "Pix",
        },
        {
          date: "20/01/2026",
          transaction: "Luana Baia 09022855996",
          value: "-88.00",
          payment_method: "Pix",
        },
        {
          date: "20/01/2026",
          transaction: "SCHIRLEY MATOS PEREIRA",
          value: "-12.00",
          payment_method: "Pix",
        },
        {
          date: "25/01/2026",
          transaction: "EDUARDO DIAS DE OLIVEIRA",
          value: "+600.00",
          payment_method: "Pix",
        },
        {
          date: "25/01/2026",
          transaction: "Jucelia Aparecida da Silveira",
          value: "-270.00",
          payment_method: "Pix",
        },
        {
          date: "25/01/2026",
          transaction: "Vitor Henrique da Silveira Alano",
          value: "-60.00",
          payment_method: "Pix",
        },
        {
          date: "25/01/2026",
          transaction: "Jucelia Aparecida da Silveira",
          value: "+100.00",
          payment_method: "Pix",
        },
        {
          date: "27/01/2026",
          transaction: "Du Tintas Automotivas Ltda",
          value: "+1000.00",
          payment_method: "Pix",
        },
        {
          date: "28/01/2026",
          transaction: "63 144 021 MARCELO BRAGA DOS SANTOS",
          value: "+255.00",
          payment_method: "Pix",
        },
        {
          date: "28/01/2026",
          transaction: "JOSILAINE ALANO CONSTANTINO",
          value: "+100.00",
          payment_method: "Pix",
        },
        {
          date: "28/01/2026",
          transaction: "BICHOS DO BAIRRO",
          value: "-13.00",
          payment_method: "Débito",
        },
        {
          date: "29/01/2026",
          transaction: "Vitor Henrique da Silveira Alano",
          value: "-15.00",
          payment_method: "Pix",
        },
        {
          date: "29/01/2026",
          transaction: "Jucelia Aparecida da Silveira",
          value: "-100.00",
          payment_method: "Pix",
        },
        {
          date: "29/01/2026",
          transaction: "MELLO MANIA",
          value: "-138.73",
          payment_method: "Débito",
        },
      ],
    },
    Financeiro: {
      total: "+0.00",
      transactions: [],
    },
  },
  total_expenses: "-4269.46",
  total_income: "+7488.90",
  how_good_status: "ÓTIMO",
  how_good_description:
    "O comportamento financeiro apresenta um saldo mensal positivo, impulsionado por entradas significativas via Pix. No entanto, há um volume considerável de gastos em categorias de consumo imediato (Alimentação e Mercado) e transferências pulverizadas em 'Outros'. Não foram registradas aplicações financeiras estruturadas, embora o saldo remanescente seja positivo.",
  hints:
    "1. Considere direcionar o saldo excedente para uma reserva de emergência ou investimentos (RDB/Tesouro). 2. Monitore a recorrência de gastos em padarias e cafeterias para otimizar o orçamento de alimentação. 3. Identifique melhor as transferências para pessoas físicas para garantir que não são gastos supérfluos ocultos.",
};

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
              <div className="inline-flex gap-2 py-4 items-center">
                <div className="bg-amber-700/50 rounded-full w-12 h-12 items-center justify-center flex">
                  <Lightbulb className="text-yellow-200" />
                </div>
                <h1 className="text-2xl font-semibold text-gray-900">Dicas financeiras</h1>
              </div>
              <p className="text-gray-600">{reportData.hints}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
