import { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

interface Transaction {
  date: string;
  transaction: string;
  value: string;
  payment_method: string;
}

interface CategoryData {
  total: string;
  transactions: Transaction[];
}

interface DashCardProps {
  title: string;
  icon: LucideIcon;
  themeColor: string;
  categoryData: CategoryData;
}

export default function DashCard({
  title,
  icon: Icon,
  themeColor,
  categoryData,
}: DashCardProps) {
  const transactionCount = categoryData.transactions.length;

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-3 gap-3">
        <div className="flex-1 min-w-0">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 truncate">
            {title}
          </h1>
          <h2 className="text-xs sm:text-sm font-medium text-gray-600">
            Qtd. de transações
          </h2>
          <div className="flex items-baseline gap-2">
            <p className="text-sm sm:text-base font-bold text-gray-900">
              {transactionCount}
            </p>
          </div>
        </div>
        <div
          className={`rounded-full p-2.5 sm:p-3 shadow-md flex items-center justify-center shrink-0 ${themeColor} bg-linear-to-br`}
        >
          <Icon className="text-white" size={24} strokeWidth={2} />
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">
          Valor total
        </h2>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl sm:text-4xl font-bold text-gray-900">
            R$ {categoryData.total}
          </p>
        </div>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full border-t border-gray-100 pt-4"
      >
        <AccordionItem value="transactions" className="border-none">
          <AccordionTrigger className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-gray-900 py-2 cursor-pointer">
            Visualizar transações
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 mt-2">
              {transactionCount === 0 ? (
                <div className="flex items-center justify-center py-8 text-gray-400">
                  <p className="text-xs sm:text-sm">
                    Nenhuma transação encontrada
                  </p>
                </div>
              ) : (
                categoryData.transactions.map((transaction, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-2.5 sm:p-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <h3 className="font-semibold text-gray-900 text-xs sm:text-sm flex-1 wrap-break-words">
                        {transaction.transaction}
                      </h3>
                      <span className="font-bold text-gray-900 text-xs sm:text-sm whitespace-nowrap">
                        R$ {transaction.value}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 text-xs text-gray-600">
                      <span>{transaction.date}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded w-fit">
                        {transaction.payment_method}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
