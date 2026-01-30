"use client";

import {
  ChartNoAxesCombined,
  Lightbulb,
  Binoculars,
  Upload,
} from "lucide-react";

export default function Home() {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Arquivo selecionado:", file.name);
    }
  };

  return (
    <div className="@container flex flex-col items-center min-h-screen py-8 px-4">
      <div className="justify-center max-w-xl mx-auto text-center">
        <h1 className="font-semibold text-5xl text-neutral-800 mb-4">
          MeAjudAI
        </h1>
        <p className="text-lg mb-1">
          Esse sistema é responsável por realizar análises de gastos bancários,
          criando um relatório com base em arquivos enviados.
          <br />
          Envie o arquivo do extrato de seu banco{" "}
          <span className="text-red-600">(PDF ou CSV)</span> abaixo e espere o
          sistema gerar seu relatório.
        </p>
        <p className="text-sm text-muted-foreground mb-3">
          De preferencia utilize arquivo CSV
        </p>
      </div>
      <div className="gap-2 sm:gap-4 flex flex-wrap justify-center mb-4">
        <div className="bg-white rounded-full px-4 sm:px-6 md:px-4 py-2 sm:py-3 md:py-2 inline-flex gap-2 items-center shadow-sm">
          <Binoculars className="text-indigo-500 w-4 h-4 sm:w-5 sm:h-5" />
          <h1 className="text-xs sm:text-sm md:text-base font-medium">
            Visão Geral
          </h1>
        </div>
        <div className="bg-white rounded-full px-4 sm:px-6 md:px-4 py-2 sm:py-3 md:py-2 inline-flex gap-2 items-center shadow-sm">
          <ChartNoAxesCombined className="text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
          <h1 className="text-xs sm:text-sm md:text-base font-medium">
            Relatórios
          </h1>
        </div>
        <div className="bg-white rounded-full px-4 sm:px-6 md:px-4 py-2 sm:py-3 md:py-2 inline-flex gap-2 items-center shadow-sm">
          <Lightbulb className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5" />
          <h1 className="text-xs sm:text-sm md:text-base font-medium">Dicas</h1>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center mt-6">
        <div className="w-full max-w-xl h-80 sm:h-96 bg-white rounded-2xl flex items-center justify-center p-3 sm:p-6 mx-auto">
          <label
            htmlFor="file-upload"
            className="w-full h-full bg-transparent border-2 border-dashed border-green-500 rounded-2xl cursor-pointer flex flex-col items-center justify-center gap-2 sm:gap-3 group hover:bg-green-100/50 transition-all duration-300 ease-in-out px-4"
          >
            <Upload className="text-gray-800 group-hover:text-green-400 h-8 w-8 sm:h-10 sm:w-10" />
            <h1 className="text-gray-800 group-hover:text-green-400 text-sm sm:text-base text-center">
              Clique para adicionar seu arquivo
            </h1>
            <input
              id="file-upload"
              type="file"
              accept=".pdf,.csv"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
      <div className="justify-center max-w-xl mx-auto text-center py-8">
        <h1 className="text-amber-800">Aviso</h1>
        <p className="text-muted-foreground">
          A inteligencia artifical pode ocasionar em alguns erros, por favor
          analise os calculos realizados por ela para ter o melhor
          aproveitamento do sistema.
        </p>
      </div>
    </div>
  );
}
