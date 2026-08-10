import { api } from "./api";

export interface Funcionario {
  id: number;
  nome: string;
  cargo: string;
  turno?: string;
  status?: string;
}

export async function listarFuncionarios() {
  const response = await api.get<Funcionario[]>("/funcionarios");

  return response.data;
}

export async function criarFuncionario(
  funcionario: Omit<Funcionario, "id">,
) {
  const response = await api.post<Funcionario>(
    "/funcionarios",
    funcionario,
  );

  return response.data;
}

export async function atualizarFuncionario(
  id: number,
  funcionario: Partial<Funcionario>,
) {
  const response = await api.put<Funcionario>(
    `/funcionarios/${id}`,
    funcionario,
  );

  return response.data;
}

export async function excluirFuncionario(id: number) {
  await api.delete(`/funcionarios/${id}`);
}