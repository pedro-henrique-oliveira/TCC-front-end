"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { forgotPasswordAction } from "./actions";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await forgotPasswordAction(email);

      if (!result.success) {
        setError(result.message ?? "Não foi possível enviar o e-mail.");
        setLoading(false);
        return;
      }

      setSent(true);
      setLoading(false);
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
          w-full max-w-sm rounded-2xl border border-zinc-800/70
          bg-zinc-950 p-8 shadow-2xl shadow-black/80
        "
      >
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <Link href="/" className="flex items-center gap-3">
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
        </div>

        {sent ? (
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400/10">
              <svg
                className="h-7 w-7 text-yellow-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h1 className="text-xl font-bold text-white">
              Verifique seu e-mail
            </h1>
            <p className="text-sm text-zinc-400">
              Enviamos um link de recuperação para{" "}
              <span className="font-medium text-white">{email}</span>. Confira
              também a caixa de spam.
            </p>

            <Link
              href="/login"
              className="
                mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-900/70
                py-3 text-center text-sm font-semibold text-white
                transition-colors hover:border-yellow-400/50
              "
            >
              Voltar para o login
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <h1 className="text-xl font-bold text-white sm:text-2xl">
                Esqueceu a senha?
              </h1>
              <p className="mt-2 text-sm text-zinc-400">
                Digite seu e-mail e enviaremos um link para você redefinir sua
                senha.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                {loading ? "Enviando..." : "Enviar link de recuperação"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-zinc-500">
              Lembrou a senha?{" "}
              <Link
                href="/login"
                className="font-medium text-yellow-400 transition-colors hover:text-yellow-300"
              >
                Voltar para o login
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
