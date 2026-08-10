"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
  funcionario?: {
    id: number;
    nome: string;
    email: string;
    cargo: string;
  };
}

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError(null);
    setLoading(true);

    try {
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

      const data: LoginResponse = await response.json();

      if (!response.ok || !data.success) {
        setError(
          data.message ?? "E-mail ou senha inválidos.",
        );

        return;
      }

      if (!data.token) {
        setError("O servidor não retornou o token de acesso.");
        return;
      }

      // Salva o JWT
      localStorage.setItem("token", data.token);

      // Salva os dados do funcionário logado
      if (data.funcionario) {
        localStorage.setItem(
          "funcionario",
          JSON.stringify(data.funcionario),
        );
      }

      // Vai para o dashboard
      router.push("/academia");
      router.refresh();
    } catch (err) {
      console.error("Erro no login:", err);

      setError(
        "Não foi possível conectar ao servidor. Verifique se o backend está funcionando.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="grid min-h-screen md:grid-cols-2">
        {/* Lado esquerdo - Branding */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-zinc-950 p-10 md:flex lg:p-14">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-yellow-400/5 blur-3xl" />

          <Link
            href="/"
            className="relative z-10 flex items-center gap-3"
          >
            <Image
              src="/icon.png"
              alt="GymFlow"
              width={42}
              height={42}
              priority
            />

            <span className="text-xl font-bold tracking-wide text-white">
              Gym<span className="text-yellow-400">Flow</span>
            </span>
          </Link>

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-extrabold leading-tight text-white lg:text-4xl">
              Supere seus limites.
              <br />
              <span className="text-yellow-400">
                Todos os dias.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-zinc-400">
              Acesse sua conta e continue sua evolução.
              Treinos, planos e acompanhamento, tudo em um
              só lugar.
            </p>
          </div>

          <p className="relative z-10 text-xs text-zinc-500">
            © {new Date().getFullYear()} GymFlow. Todos os
            direitos reservados.
          </p>
        </div>

        {/* Lado direito - Formulário */}
        <div className="flex flex-col justify-center gap-8 bg-black p-8 sm:p-12 lg:p-16">
          {/* Logo mobile */}
          <Link
            href="/"
            className="flex items-center gap-3 md:hidden"
          >
            <Image
              src="/icon.png"
              alt="GymFlow"
              width={36}
              height={36}
              priority
            />

            <span className="text-lg font-bold tracking-wide text-white">
              Gym<span className="text-yellow-400">Flow</span>
            </span>
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Bem-vindo de volta
            </h1>

            <p className="mt-2 text-sm text-zinc-400">
              Entre com suas credenciais para acessar sua
              conta.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            {/* E-mail */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-wide text-zinc-400"
              >
                E-mail
              </label>

              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="
                  w-full rounded-lg border border-zinc-800
                  bg-zinc-900/70 px-4 py-3 text-sm text-white
                  placeholder:text-zinc-600 outline-none
                  transition-colors
                  focus:border-yellow-400
                  focus:ring-2 focus:ring-yellow-400/20
                "
              />
            </div>

            {/* Senha */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold uppercase tracking-wide text-zinc-400"
                >
                  Senha
                </label>

                <Link
                  href="/esqueci-senha"
                  className="text-xs font-medium text-yellow-400 hover:text-yellow-300"
                >
                  Esqueceu a senha?
                </Link>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="••••••••"
                  className="
                    w-full rounded-lg border border-zinc-800
                    bg-zinc-900/70 px-4 py-3 pr-16
                    text-sm text-white placeholder:text-zinc-600
                    outline-none transition-colors
                    focus:border-yellow-400
                    focus:ring-2 focus:ring-yellow-400/20
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((value) => !value)
                  }
                  className="
                    absolute right-3 top-1/2
                    -translate-y-1/2 text-xs font-medium
                    text-zinc-500 transition-colors
                    hover:text-yellow-400
                  "
                >
                  {showPassword ? "ocultar" : "ver"}
                </button>
              </div>
            </div>

            {/* Erro */}
            {error && (
              <div className="rounded-lg border border-red-400/30 bg-red-400/10 px-3 py-2.5">
                <p className="text-xs text-red-400">
                  {error}
                </p>
              </div>
            )}

            {/* Entrar */}
            <button
              type="submit"
              disabled={loading}
              className="
                mt-1 w-full rounded-lg bg-yellow-400
                py-3 text-sm font-bold text-black
                transition-colors hover:bg-yellow-300
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <p className="text-center text-sm text-zinc-500">
            Ainda não tem uma conta?{" "}
            <Link
              href="/register"
              className="font-medium text-yellow-400 transition-colors hover:text-yellow-300"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}