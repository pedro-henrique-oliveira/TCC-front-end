"use server";

import { cookies } from "next/headers";

const API_URL = "http://localhost:8080";

export type Funcionario = {
  id: string;
  nome: string;
  email: string;
  telefone?: string;
  cargo?: string;
};

export async function buscarFuncionario(): Promise<Funcionario | null> {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    if (!token) {
      return null;
    }

    const response = await fetch(`${API_URL}/funcionario/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar funcionário:", error);

    return null;
  }
}

export async function logoutAction() {
  const cookiesStore = await cookies();

  cookiesStore.delete("access_token");
}