"use client";

import { useState } from "react";
import Link from "next/link";

const perguntas = [
  {
    pergunta: "Como faço para acessar o GymFlow?",
    resposta:
      "Para acessar o GymFlow, utilize seu e-mail e senha cadastrados no sistema. Caso ainda não possua uma conta, entre em contato com o administrador responsável pela academia.",
  },
  {
    pergunta: "Esqueci minha senha. O que devo fazer?",
    resposta:
      "Caso tenha esquecido sua senha, utilize a opção de recuperação de senha disponível na tela de login. Se essa opção não estiver disponível, entre em contato com o administrador da academia.",
  },
  {
    pergunta: "Como cadastro um novo aluno?",
    resposta:
      "Após entrar no sistema, acesse a área de Alunos e selecione a opção para adicionar um novo cadastro. Preencha as informações solicitadas e confirme o cadastro.",
  },
  {
    pergunta: "Como cadastrar um funcionário?",
    resposta:
      "Acesse a área de Funcionários no painel administrativo e selecione a opção de adicionar funcionário. Depois, preencha os dados necessários e salve as informações.",
  },
  {
    pergunta: "Como cadastrar um treino?",
    resposta:
      "Na área de Treinos, você poderá criar um novo treino e definir as informações necessárias, como nome, exercícios, séries, repetições e demais configurações disponíveis.",
  },
  {
    pergunta: "Como consultar os pagamentos?",
    resposta:
      "Os pagamentos podem ser consultados através da área financeira ou de mensalidades do GymFlow. Nessa área é possível visualizar informações sobre pagamentos realizados, pendentes e atrasados.",
  },
  {
    pergunta: "Meus dados estão seguros?",
    resposta:
      "O GymFlow busca adotar medidas técnicas para proteger as informações armazenadas no sistema. Para mais detalhes sobre o tratamento dos dados, consulte nossa Política de Privacidade.",
  },
  {
    pergunta: "O que faço caso encontre um problema no sistema?",
    resposta:
      "Caso encontre algum erro ou comportamento inesperado, verifique se o problema continua acontecendo. Se persistir, entre em contato com a equipe responsável pelo GymFlow informando o máximo de detalhes possível sobre o problema.",
  },
];

export default function Suporte() {
  const [aberta, setAberta] = useState<number | null>(null);
  const [busca, setBusca] = useState("");

  const perguntasFiltradas = perguntas.filter((item) =>
    item.pergunta.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl">

        {/* Botão voltar */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 rounded-lg border border-gray-800 bg-zinc-950 px-4 py-2 text-sm text-gray-300 transition hover:border-gray-600 hover:bg-zinc-900 hover:text-white"
        >
          ← Voltar
        </Link>

        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Central de Suporte
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Precisa de ajuda com o GymFlow? Encontre respostas para as
            dúvidas mais comuns ou entre em contato com nossa equipe.
          </p>
        </div>

        {/* Cards de suporte */}
        <div className="mb-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6 text-center transition hover:border-gray-700">
            <div className="mb-4 text-4xl">
              📚
            </div>

            <h2 className="mb-2 text-xl font-semibold">
              Documentação
            </h2>

            <p className="mb-5 text-sm leading-6 text-gray-400">
              Consulte informações e orientações sobre as principais
              funcionalidades do GymFlow.
            </p>

            <Link
              href="/documentacao"
              className="inline-block rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:bg-zinc-900 hover:text-white"
            >
              Ver documentação
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6 text-center transition hover:border-gray-700">
            <div className="mb-4 text-4xl">
              💬
            </div>

            <h2 className="mb-2 text-xl font-semibold">
              Fale conosco
            </h2>

            <p className="mb-5 text-sm leading-6 text-gray-400">
              Entre em contato com nossa equipe caso precise de ajuda
              com o sistema.
            </p>

            <Link
              href="/contato"
              className="inline-block rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:bg-zinc-900 hover:text-white"
            >
              Entrar em contato
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6 text-center transition hover:border-gray-700">
            <div className="mb-4 text-4xl">
              ⚡
            </div>

            <h2 className="mb-2 text-xl font-semibold">
              Resolução rápida
            </h2>

            <p className="mb-5 text-sm leading-6 text-gray-400">
              Encontre rapidamente respostas para problemas e dúvidas
              frequentes.
            </p>

            <a
              href="#perguntas"
              className="inline-block rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:bg-zinc-900 hover:text-white"
            >
              Ver perguntas
            </a>
          </div>

        </div>

        {/* Busca */}
        <div className="mb-8">
          <label
            htmlFor="busca"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Encontre uma resposta
          </label>

          <input
            id="busca"
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Digite sua dúvida..."
            className="w-full rounded-xl border border-gray-800 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-gray-600"
          />
        </div>

        {/* FAQ */}
        <section id="perguntas">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">
              Perguntas frequentes
            </h2>

            <p className="mt-2 text-gray-400">
              Confira algumas das dúvidas mais comuns sobre o GymFlow.
            </p>
          </div>

          <div className="space-y-3">
            {perguntasFiltradas.length > 0 ? (
              perguntasFiltradas.map((item, index) => {
                const estaAberta = aberta === index;

                return (
                  <div
                    key={item.pergunta}
                    className="overflow-hidden rounded-xl border border-gray-800 bg-zinc-950"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setAberta(estaAberta ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-zinc-900"
                    >
                      <span className="font-medium text-gray-200">
                        {item.pergunta}
                      </span>

                      <span className="text-xl text-gray-500">
                        {estaAberta ? "−" : "+"}
                      </span>
                    </button>

                    {estaAberta && (
                      <div className="border-t border-gray-800 px-5 py-4">
                        <p className="leading-7 text-gray-400">
                          {item.resposta}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="rounded-xl border border-gray-800 bg-zinc-950 p-8 text-center">
                <p className="text-gray-400">
                  Nenhuma pergunta encontrada.
                </p>

                <button
                  type="button"
                  onClick={() => setBusca("")}
                  className="mt-4 text-sm text-gray-300 underline hover:text-white"
                >
                  Limpar pesquisa
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contato final */}
        <section className="mt-10 rounded-2xl border border-gray-800 bg-zinc-950 p-8 text-center">
          <h2 className="text-2xl font-semibold">
            Ainda precisa de ajuda?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-400">
            Se você não encontrou a resposta que estava procurando,
            nossa equipe está disponível para ajudar.
          </p>

          <Link
            href="/contato"
            className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            Falar com a equipe
          </Link>
        </section>

        {/* Rodapé */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            GymFlow • Central de Suporte
          </p>
        </div>

      </section>
    </main>
  );
}