"use server";

export async function forgotPasswordAction(email: string) {
  const response = await fetch("http://localhost:8080/forgot-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (response.status === 200) {
    return { success: true };
  }

  return { success: false, message: data.message ?? "Não foi possível enviar o e-mail." };
}