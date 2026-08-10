import { api } from "./api";

export interface Aluno {
  id: number;
  nome: string;
  idade: number;
  cpf: string | number;
  email: string;
  dataNascimento: string;
  plano: string;
}

export async function listarAlunos() {
  const response = await api.get<Aluno[]>("/alunos");

  return response.data;
}

export async function buscarAluno(id: number) {
  const response = await api.get<Aluno>(`/alunos/${id}`);

  return response.data;
}

export async function criarAluno(aluno: Omit<Aluno, "id">) {
  const response = await api.post<Aluno>("/alunos", aluno);

  return response.data;
}

export async function atualizarAluno(
  id: number,
  aluno: Partial<Aluno>,
) {
  const response = await api.put<Aluno>(`/alunos/${id}`, aluno);

  return response.data;
}

export async function excluirAluno(id: number) {
  await api.delete(`/alunos/${id}`);
}