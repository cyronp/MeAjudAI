"use client";

import {
  ChartNoAxesCombined,
  Lightbulb,
  Binoculars,
  Upload,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setError(null);
      console.log("Arquivo selecionado:", file.name);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Por favor, selecione um arquivo");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("/api/request", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao processar arquivo");
      }

      const data = await response.json();

      localStorage.setItem("reportData", JSON.stringify(data));

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Erro ao processar o arquivo");
    } finally {
      setIsLoading(false);
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
      <div className="flex flex-col w-full items-center justify-center mt-6 gap-4">
        <div className="w-full max-w-xl h-80 sm:h-96 bg-white rounded-2xl flex items-center justify-center p-3 sm:p-6 mx-auto">
          <label
            htmlFor="file-upload"
            className={`w-full h-full bg-transparent border-2 border-dashed rounded-2xl cursor-pointer flex flex-col items-center justify-center gap-2 sm:gap-3 group transition-all duration-300 ease-in-out px-4 ${
              selectedFile
                ? "border-green-500 bg-green-50"
                : "border-green-500 hover:bg-green-100/50"
            }`}
          >
            <Upload
              className={`h-8 w-8 sm:h-10 sm:w-10 ${
                selectedFile
                  ? "text-green-600"
                  : "text-gray-800 group-hover:text-green-400"
              }`}
            />
            <h1
              className={`text-sm sm:text-base text-center ${
                selectedFile
                  ? "text-green-700 font-medium"
                  : "text-gray-800 group-hover:text-green-400"
              }`}
            >
              {selectedFile
                ? selectedFile.name
                : "Clique para adicionar seu arquivo"}
            </h1>
            {selectedFile && (
              <p className="text-xs text-green-600">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            )}
            <input
              id="file-upload"
              type="file"
              accept=".pdf,.csv"
              onChange={handleFileChange}
              className="hidden"
              disabled={isLoading}
            />
          </label>
        </div>

        {error && (
          <div className="w-full max-w-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={!selectedFile || isLoading}
          className="w-full max-w-xl bg-emerald-600 text-white font-semibold py-4 px-6 rounded-xl transition-transform duration-300 hover:scale-105 disabled:bg-neutral-900 disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Analisando seu extrato...
            </>
          ) : (
            <>Gerar Relatório Financeiro</>
          )}
        </button>
      </div>
      <div className="justify-center max-w-xl mx-auto text-center py-8">
        <h1 className="text-amber-800">Aviso</h1>
        <p className="text-muted-foreground">
          A inteligência artificial pode ocasionar alguns erros na análise.
          Recomendamos revisar os cálculos e categorizações para melhor
          aproveitamento do sistema.
        </p>
      </div>
    </div>
  );
}
