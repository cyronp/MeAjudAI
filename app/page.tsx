import {
  ChartNoAxesCombined,
  Lightbulb,
  Binoculars,
  Upload,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-16 px-4 bg-green-100">
      <div className="justify-center max-w-xl mx-auto text-center">
        <h1 className="font-semibold text-5xl text-neutral-800 mb-4">
          MeAjudAI
        </h1>
        <p className="text-lg mb-1">
          Esse sistema é responsável por realizar uma analise no arquivo enviado
          ao sistema, selecione um arquivo de extrato do seu banco (PDF ou CSV)
          e espere o sistema gerar seu relatório.
        </p>
        <p className="text-sm text-muted-foreground">
          De preferencia utilize arquivo CSV
        </p>
      </div>
      <div className="gap-4 flex p-2">
        <div className="max-w-xl bg-white rounded-2xl px-3 py-2 inline-flex gap-1">
          <Binoculars className="text-indigo-500" />
          <h1 className="xl:text-base md:text-xs sm:text-xs">Visão Geral</h1>
        </div>
        <div className="max-w-xl bg-white rounded-2xl px-3 py-2 inline-flex gap-1">
          <ChartNoAxesCombined className="text-blue-500" />
          <h1 className="xl:text-base md:text-xs sm:text-xs">Relatórios</h1>
        </div>
        <div className="max-w-xl bg-white rounded-2xl px-3 py-2 inline-flex gap-1">
          <Lightbulb className="text-yellow-500" />
          <h1 className="xl:text-base md:text-xs sm:text-xs">Dicas</h1>
        </div>
        <div className="flex"></div>
      </div>
      <div className="flex flex-col p-4">
        <div className="max-w-xl h-96 w-7xl bg-white rounded-2xl flex items-center justify-center p-6">
          <div className="max-w-xl h-64 w-3xl bg-transparent border-2 border-dashed border-green-500 rounded-2xl cursor-pointer flex flex-col items-center justify-center group hover:bg-green-100/50 transition-all duration-300 ease-in-out">
            <Upload className="text-gray-800 group-hover:text-green-400 h-10 w-10" />
            <h1 className="text-gray-800 group-hover:text-green-400">
              Clique para adicionar seu arquivo
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
