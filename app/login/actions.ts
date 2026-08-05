"use server";
 
import { cookies } from "next/headers";
 
type LoginResult =
    | { success: true; role: "admin" | "funcionario"; nome?: string }
    | { success: false; message: string };
 
export async function loginAction(
    email: string,
    password: string
): Promise<LoginResult> {
    const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            senha: password,
        }),
    });
 
    const data = await response.json();
 
    if (response.status === 200) {
        const cookiesStore = await cookies();
        cookiesStore.set("access_token", data.access_token);
 
        // Ajuste "data.role" e "data.nome" para os nomes reais que sua API devolve.
        return { success: true, role: data.role, nome: data.nome };
    }
 
    return {
        success: false,
        message: data.message ?? "E-mail ou senha incorretos.",
    };
}
