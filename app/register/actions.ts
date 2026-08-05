"use server";

import { cookies } from "next/headers";

export async function registerAction(
  name: string,
  email: string,
  password: string,
) {
  const response = await fetch("http://localhost:8080/register", {
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
    cookiesStore.set("access_token", data.access_token);
    return;
  }

  return data;
}
