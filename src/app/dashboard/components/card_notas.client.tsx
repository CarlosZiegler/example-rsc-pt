"use client";

import { useQuery } from "@tanstack/react-query";
import { DashboardCard } from "./card_dashboard";

interface NotasModel {
  data: string;
  notas_emitidas: number;
}

async function fetchNotas(): Promise<NotasModel> {
  const res = await fetch("/api/notas");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export function CardNotasClient() {
  const {
    data: dados,
    isLoading,
    error,
  } = useQuery<NotasModel>({
    queryKey: ["notas"],
    queryFn: fetchNotas,
    refetchInterval: 5000, // Refetch every 5 seconds
  });

  if (isLoading || !dados) {
    return (
      <div className="rounded-lg shadow-sm p-6">
        <p>Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg shadow-sm p-6 text-red-500">
        <p>Erro ao carregar dados</p>
      </div>
    );
  }

  return (
    <DashboardCard
      data={dados.data}
      valor={dados.notas_emitidas}
      titulo="Notas Emitidas (Client)"
    />
  );
}
