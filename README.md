# MeAjudAI

Sistema de análise financeira que utiliza inteligência artificial para categorizar e avaliar seus gastos bancários.

## Sobre o Projeto

MeAjudAI é uma aplicação web que processa extratos bancários (PDF ou CSV) e gera relatórios financeiros detalhados através da API do Google Gemini. O sistema categoriza automaticamente suas transações, calcula totais por categoria e fornece insights personalizados sobre sua saúde financeira.

## Funcionalidades

- Upload de extratos bancários em formato PDF ou CSV
- Categorização automática de transações usando IA
- Visualização de gastos por categoria
- Cálculo de totais de receitas e despesas
- Análise do comportamento financeiro (Ótimo/Moderado/Ruim)
- Dicas personalizadas para melhorar suas finanças

## Categorias de Gastos

O sistema classifica suas transações nas seguintes categorias:

- Casa & Contas fixas
- Mercado
- Alimentação
- Transporte
- Saúde
- Compras
- Lazer & Entretenimento
- Educação
- Outros
- Financeiro

## Como Usar

1. Clone o repositório
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure a variável de ambiente:
   - Crie um arquivo `.env.local` na raiz do projeto
   - Adicione sua chave da API do Google Gemini:
     ```
     GOOGLE_GEMINI_API=sua_chave_aqui
     ```
   - Obtenha sua chave em: https://aistudio.google.com/app/apikey

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse http://localhost:3000 no navegador

6. Faça upload de seu extrato bancário (PDF ou CSV)

7. Clique em "Gerar Relatório Financeiro"

8. Visualize seu relatório detalhado com análises e dicas

## Tecnologias Utilizadas

- Next.js 15
- TypeScript
- Tailwind CSS
- Google Gemini API
- Lucide Icons

## Observações

A inteligência artificial pode ocasionar alguns erros na análise. Recomendamos revisar os cálculos e categorizações para melhor aproveitamento do sistema.

## Formato de Arquivo

Para melhores resultados, utilize arquivos CSV. Certifique-se de que seu extrato contém:

- Data da transação
- Nome do estabelecimento
- Valor da transação
- Método de pagamento (quando disponível)
