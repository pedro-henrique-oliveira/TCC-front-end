import Link from "next/link";
import { redirect } from "next/navigation";

import { buscarFuncionario, logoutAction } from "./actions";

export default async function FuncionarioPage() {
  const funcionario = await buscarFuncionario();

  if (!funcionario) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-zinc-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold">
              Gym<span className="text-gray-400">Flow</span>
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Área do funcionário
            </p>
          </div>

          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-lg border border-gray-800 px-4 py-2 text-sm text-gray-300 transition hover:bg-zinc-900 hover:text-white"
            >
              Sair
            </button>
          </form>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Boas-vindas */}
        <section className="mb-8">
          <p className="text-sm text-gray-500">
            Bem-vindo de volta
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Olá, {funcionario.nome} 👋
          </h2>

          <p className="mt-2 text-gray-400">
            Acesse as ferramentas disponíveis para você.
          </p>
        </section>

        {/* Informações do funcionário */}
        <section className="mb-8 rounded-2xl border border-gray-800 bg-zinc-950 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">
              Meus dados
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Informações do seu cadastro.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <p className="text-sm text-gray-500">
                Nome
              </p>

              <p className="mt-1 text-gray-200">
                {funcionario.nome}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                E-mail
              </p>

              <p className="mt-1 text-gray-200">
                {funcionario.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Telefone
              </p>

              <p className="mt-1 text-gray-200">
                {funcionario.telefone || "Não informado"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Cargo
              </p>

              <p className="mt-1 text-gray-200">
                {funcionario.cargo || "Funcionário"}
              </p>
            </div>

          </div>
        </section>

        {/* Funcionalidades */}
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-semibold">
              Funcionalidades
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Acesse as ferramentas disponíveis.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {/* Alunos */}
            <Link
              href="/funcionario/alunos"
              className="group rounded-2xl border border-gray-800 bg-zinc-950 p-6 transition hover:border-gray-600 hover:bg-zinc-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-2xl">
                👥
              </div>

              <h3 className="text-lg font-semibold">
                Alunos
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500 group-hover:text-gray-400">
                Consulte os alunos cadastrados e suas informações.
              </p>

              <span className="mt-4 inline-block text-sm text-gray-400">
                Acessar →
              </span>
            </Link>

            {/* Treinos */}
            <Link
              href="/funcionario/treinos"
              className="group rounded-2xl border border-gray-800 bg-zinc-950 p-6 transition hover:border-gray-600 hover:bg-zinc-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-2xl">
                🏋️
              </div>

              <h3 className="text-lg font-semibold">
                Treinos
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500 group-hover:text-gray-400">
                Consulte e acompanhe os treinos dos alunos.
              </p>

              <span className="mt-4 inline-block text-sm text-gray-400">
                Acessar →
              </span>
            </Link>

            {/* Perfil */}
            <Link
              href="/funcionario/perfil"
              className="group rounded-2xl border border-gray-800 bg-zinc-950 p-6 transition hover:border-gray-600 hover:bg-zinc-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-2xl">
                👤
              </div>

              <h3 className="text-lg font-semibold">
                Meu perfil
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500 group-hover:text-gray-400">
                Visualize e gerencie suas informações pessoais.
              </p>

              <span className="mt-4 inline-block text-sm text-gray-400">
                Acessar →
              </span>
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}