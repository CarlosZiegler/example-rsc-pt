import { formatarDataBR } from "@/core/utils/utils";

type ICardProps = {
  data: string;
  valor: number;
  titulo: string;
};

export const DashboardCard = ({ data, valor, titulo }: ICardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-6">
      <h3>{titulo}</h3>
      <p>{valor}</p>
      <span>Atualizado em: {formatarDataBR(data)}</span>
    </div>
  );
};
