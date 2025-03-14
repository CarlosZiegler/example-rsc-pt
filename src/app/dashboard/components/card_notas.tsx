import { DashboardCard } from "./card_dashboard";

async function fetchData(): Promise<NotasModel> {
  const res = await fetch("http://localhost:3000/api/notas");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

interface NotasModel {
  data: string;
  notas_emitidas: number;
}

export async function CardNotas() {
  const dados = await fetchData();

  return (
    <DashboardCard
      data={dados.data}
      valor={dados.notas_emitidas}
      titulo="Notas Emitidas"
    />
  );
}
