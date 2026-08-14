"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function decodeJwt(token: string) {
  const payload = token.split(".")[1];
  const decoded = Buffer.from(payload, "base64url").toString("utf-8");
  return JSON.parse(decoded);
}

export async function loginAction(email: string, password: string) {
  let tipo: "admin" | "funcionario" | null = null;
  let accessToken: string | null = null;

  try {
    let response = await fetch("http://localhost:8080/funcionarios/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha: password }),
    });

    if (response.ok) {
      const data = await response.json();
      tipo = "funcionario";
      accessToken = data.access_token;
    } else {
      response = await fetch("http://localhost:8080/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      });

      if (response.ok) {
        const data = await response.json();
        tipo = "admin";
        accessToken = data.access_token;
      }
    }
  } catch (error) {
    console.error("Erro no login:", error);
    return { success: false, message: "Erro interno do servidor." };
  }

  if (!tipo || !accessToken) {
    return { success: false, message: "E-mail ou senha inválidos." };
  }

  const cookieStore = await cookies();
  cookieStore.set("access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
  cookieStore.set("user_type", tipo, {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  if (tipo === "funcionario") {
    redirect("/funcionario");
  }

  redirect("/academia");
}