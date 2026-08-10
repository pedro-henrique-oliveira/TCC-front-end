import { api } from "./api";

export interface Receita {
  id: number;
  pagamento: string;
  dataPagamento: string;
  valorPagamento: string;
  status: string;
  formaPagamento: string;
  updatedAt: string;
  createdAt: string;
}

export async function listarReceitas() {
  const response = await api.get<Receita[]>("/receitas");

  return response.data;
}

export async function criarReceita(
  receita: Omit<Receita, "id" | "updatedAt" | "createdAt">,
) {
  const response = await api.post<Receita>(
    "/receitas",
    receita,
  );

  return response.data;
}

export async function atualizarReceita(
  id: number,
  receita: Partial<Receita>,
) {
  const response = await api.put<Receita>(
    `/receitas/${id}`,
    receita,
  );

  return response.data;
}

export async function excluirReceita(id: number) {
  await api.delete(`/receitas/${id}`);
}