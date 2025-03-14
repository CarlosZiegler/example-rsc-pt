import { NextResponse } from "next/server";

export async function GET() {
  const notas = {
    data: new Date().toISOString(),
    notas_emitidas: parseFloat((Math.random() * 1000).toFixed(0)),
  };

  return NextResponse.json(notas);
}
