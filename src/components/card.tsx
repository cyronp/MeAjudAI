import { ShoppingCart, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

export default function DashCard() {
  return (
    <div className="w-96 bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Mercado</h1>
          <p className="text-sm text-gray-500">Categoria de despesas</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full p-3 shadow-md flex items-center justify-center">
          <ShoppingCart className="text-white" size={20} strokeWidth={2.5} />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-600 mb-2">
          Total das transações
        </h2>
        <div className="flex items-baseline gap-2">
          <p className="text-4xl font-bold text-gray-900">R$ 900,00</p>
        </div>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full border-t border-gray-100 pt-4"
      >
        <AccordionItem value="transactions" className="border-none">
          <AccordionTrigger className="text-sm font-semibold text-gray-700 hover:text-gray-900 py-2">
            Visualizar transações
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 mt-2">
              <div className="flex items-center justify-center py-8 text-gray-400">
                <p className="text-sm">As transações aparecerão aqui...</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
