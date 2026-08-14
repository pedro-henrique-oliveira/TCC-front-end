"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setEnviado(true);

    setTimeout(() => {
      setEnviado(false);
    }, 5000);
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <section className="mx-auto max-w-6xl">

        {/* Botão voltar */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 rounded-lg border border-gray-800 bg-zinc-950 px-4 py-2 text-sm text-gray-300 transition hover:border-gray-600 hover:bg-zinc-900 hover:text-white"
        >
          ← Voltar
        </Link>

        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-500">
            GymFlow
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Fale Conosco
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Tem alguma dúvida, sugestão ou precisa de ajuda?
            Entre em contato com a equipe do GymFlow.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Informações */}
          <div className="space-y-6">

            <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-7">
              <h2 className="mb-6 text-2xl font-semibold">
                Entre em contato
              </h2>

              <div className="space-y-6">

                {/* E-mail */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-800 bg-black text-xl">
                    ✉
                  </div>

                  <div>
                    <h3 className="font-medium">
                      E-mail
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      contato@gymflow.com
                    </p>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-800 bg-black text-xl">
                    ☎
                  </div>

                  <div>
                    <h3 className="font-medium">
                      Telefone
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      (41) 99999-9999
                    </p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-800 bg-black text-xl">
                    🕐
                  </div>

                  <div>
                    <h3 className="font-medium">
                      Horário de atendimento
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      Segunda a sexta
                    </p>

                    <p className="text-sm text-gray-500">
                      08:00 às 18:00
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Suporte */}
            <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-7">
              <h2 className="mb-3 text-xl font-semibold">
                Precisa de suporte?
              </h2>

              <p className="leading-7 text-gray-400">
                Antes de entrar em contato, você pode consultar nossa
                central de suporte e a documentação do GymFlow.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/suporte"
                  className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:bg-zinc-900 hover:text-white"
                >
                  Central de suporte
                </Link>

                <Link
                  href="/documentacao"
                  className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:bg-zinc-900 hover:text-white"
                >
                  Documentação
                </Link>
              </div>
            </div>

          </div>

          {/* Formulário */}
          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-7">

            <h2 className="mb-2 text-2xl font-semibold">
              Envie uma mensagem
            </h2>

            <p className="mb-7 text-sm text-gray-400">
              Preencha o formulário abaixo e entraremos em contato.
            </p>

            {enviado && (
              <div className="mb-6 rounded-xl border border-gray-700 bg-black p-4">
                <p className="font-medium text-white">
                  ✓ Mensagem enviada!
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Obrigado pelo contato. Em breve nossa equipe
                  retornará sua mensagem.
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Nome
                </label>

                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Digite seu nome"
                  required
                  className="w-full rounded-xl border border-gray-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-gray-600"
                />
              </div>

              {/* E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  E-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seuemail@email.com"
                  required
                  className="w-full rounded-xl border border-gray-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-gray-600"
                />
              </div>

              {/* Assunto */}
              <div>
                <label
                  htmlFor="assunto"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Assunto
                </label>

                <select
                  id="assunto"
                  name="assunto"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-800 bg-black px-4 py-3 text-gray-300 outline-none transition focus:border-gray-600"
                >
                  <option value="" disabled>
                    Selecione um assunto
                  </option>

                  <option value="duvida">
                    Dúvida
                  </option>

                  <option value="suporte">
                    Problema técnico
                  </option>

                  <option value="sugestao">
                    Sugestão
                  </option>

                  <option value="financeiro">
                    Financeiro
                  </option>

                  <option value="outro">
                    Outro
                  </option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label
                  htmlFor="mensagem"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Mensagem
                </label>

                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={6}
                  placeholder="Digite sua mensagem..."
                  required
                  className="w-full resize-none rounded-xl border border-gray-800 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-gray-600"
                />
              </div>

              {/* Botão */}
              <button
                type="submit"
                className="w-full rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
              >
                Enviar mensagem
              </button>

            </form>
          </div>
        </div>

        {/* FAQ rápido */}
        <section className="mt-10 rounded-2xl border border-gray-800 bg-zinc-950 p-8 text-center">
          <h2 className="text-2xl font-semibold">
            Não sabe onde encontrar sua resposta?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-400">
            Consulte nossa central de suporte para encontrar respostas
            para as dúvidas mais frequentes sobre o GymFlow.
          </p>

          <Link
            href="/suporte"
            className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            Acessar suporte
          </Link>
        </section>

        {/* Rodapé */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            GymFlow • Fale Conosco
          </p>
        </div>

      </section>
    </main>
  );
}