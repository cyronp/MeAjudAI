import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API || "");
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const FINANCIAL_ANALYSIS_PROMPT = readFileSync(
  join(process.cwd(), "financial-analysis-prompt.txt"),
  "utf-8",
);

export async function POST(req: Request): Promise<Response> {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "Nenhum arquivo foi enviado" },
        { status: 400 },
      );
    }

    const allowedTypes = [
      "application/pdf",
      "text/csv",
      "application/vnd.ms-excel",
    ];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Tipo de arquivo não suportado. Envie apenas PDF ou CSV" },
        { status: 400 },
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64File = buffer.toString("base64");

    const mimeType =
      file.type === "text/csv" || file.type === "application/vnd.ms-excel"
        ? "text/csv"
        : "application/pdf";

    const result = await model.generateContent([
      {
        text: FINANCIAL_ANALYSIS_PROMPT,
      },
      {
        inlineData: {
          data: base64File,
          mimeType: mimeType,
        },
      },
    ]);

    const response = await result.response;
    const text = response.text();

    let jsonResponse;
    try {
      jsonResponse = JSON.parse(text);
    } catch (parseError) {
      const cleanText = text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();
      jsonResponse = JSON.parse(cleanText);
    }

    return NextResponse.json(jsonResponse);
  } catch (error: any) {
    console.error("Erro ao processar arquivo:", error);
    return NextResponse.json(
      { error: "Erro ao processar o arquivo", details: error.message },
      { status: 500 },
    );
  }
}
