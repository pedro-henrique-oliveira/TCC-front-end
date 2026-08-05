"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerAction } from "./actions";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setLoading(true);

    try {
      const result = await registerAction(name, email, password);

      if (result) {
        setError(result.message ?? "Não foi possível criar a conta.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError("Não foi possível conectar. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <div
      className="
        flex min-h-screen w-full flex-col items-center justify-center
        bg-black px-4 py-24
        bg-[radial-gradient(circle_at_top,_theme(colors.zinc.900)_0%,_theme(colors.black)_70%)]
      "
    >
      <div
        className="
          grid w-full max-w-5xl overflow-hidden rounded-2xl
          border border-zinc-800/70 bg-zinc-950 shadow-2xl shadow-black/80
          md:grid-cols-2
        "
      >
        {/* Lado esquerdo - Branding */}
        <div
          className="
            relative hidden flex-col justify-between overflow-hidden
            bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-10
            md:flex
          "
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

          <Link href="/" className="flex items-center gap-3">
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
            <h2 className="text-3xl font-extrabold leading-tight text-white">
              Comece sua
              <br />
              <span className="text-yellow-400">transformação hoje.</span>
            </h2>
            <p className="max-w-sm text-sm text-zinc-400">
              Crie sua conta e tenha acesso a treinos, planos personalizados e
              acompanhamento completo da sua evolução.
            </p>
          </div>

          <p className="relative z-10 text-xs text-zinc-500">
            © {new Date().getFullYear()} GymFlow. Todos os direitos reservados.
          </p>
        </div>

        {/* Lado direito - Formulário */}
        <div className="flex flex-col justify-center gap-8 p-8 sm:p-12">
          <Link href="/" className="flex items-center gap-3 md:hidden">
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
              Crie sua conta
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              Preencha os dados abaixo para começar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-xs font-semibold uppercase tracking-wide text-zinc-400"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                className="
                  w-full rounded-lg border border-zinc-800 bg-zinc-900/70
                  px-4 py-3 text-sm text-white placeholder:text-zinc-600
                  outline-none transition-colors
                  focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20
                "
              />
            </div>

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="
                  w-full rounded-lg border border-zinc-800 bg-zinc-900/70
                  px-4 py-3 text-sm text-white placeholder:text-zinc-600
                  outline-none transition-colors
                  focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20
                "
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-xs font-semibold uppercase tracking-wide text-zinc-400"
              >
                Senha
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="
                    w-full rounded-lg border border-zinc-800 bg-zinc-900/70
                    px-4 py-3 pr-12 text-sm text-white placeholder:text-zinc-600
                    outline-none transition-colors
                    focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20
                  "
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    text-xs font-medium text-zinc-500 hover:text-yellow-400
                  "
                >
                  {showPassword ? "ocultar" : "ver"}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="confirmPassword"
                className="text-xs font-semibold uppercase tracking-wide text-zinc-400"
              >
                Confirmar senha
              </label>
              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="
                  w-full rounded-lg border border-zinc-800 bg-zinc-900/70
                  px-4 py-3 text-sm text-white placeholder:text-zinc-600
                  outline-none transition-colors
                  focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20
                "
              />
            </div>

            {error && (
              <p className="rounded-lg border border-yellow-400/30 bg-yellow-400/10 px-3 py-2 text-xs text-yellow-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="
                mt-1 w-full rounded-lg bg-yellow-400 py-3 text-sm font-bold text-black
                transition-colors hover:bg-yellow-300
                disabled:cursor-not-allowed disabled:opacity-60
              "
            >
              {loading ? "Criando conta..." : "Criar conta"}
            </button>
          </form>

          <p className="text-center text-sm text-zinc-500">
            Já tem uma conta?{" "}
            <Link
              href="/login"
              className="font-medium text-yellow-400 transition-colors hover:text-yellow-300"
            >
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
