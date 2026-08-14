"use server";

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export async function registerAction(
  name: string,
  email: string,
  password: string,
) {
  try {
    // Validação básica
    if (!name || !email || !password) {
      return { error: "Todos os campos são obrigatórios." };
    }

    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: name,
        email,
        senha: password,
      }),
    });

    const data = await response.json();

    if (response.status === 200 || response.status === 201) {
      const cookiesStore = await cookies();
      cookiesStore.set("access_token", data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 dias
      });
      return { success: true };
    }

    return { error: data.message || "Erro ao criar conta." };
  } catch (err) {
    console.error("Register error:", err);
    return { error: "Erro ao conectar com o servidor." };
  }
}