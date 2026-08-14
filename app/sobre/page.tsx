import Link from "next/link";

export default function SobreNos() {
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

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Sobre Nós
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Conheça o GymFlow, um sistema desenvolvido para facilitar a
            organização e o gerenciamento de academias.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              Sobre o GymFlow
            </h2>

            <p className="leading-7 text-gray-400">
              O GymFlow é um projeto desenvolvido com o objetivo de
              proporcionar uma solução simples e organizada para o
              gerenciamento de informações relacionadas a academias.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              Nosso objetivo
            </h2>

            <p className="leading-7 text-gray-400">
              Buscamos tornar o gerenciamento da academia mais prático,
              reunindo informações importantes em um único sistema e
              proporcionando uma experiência mais organizada para seus
              usuários.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-gray-800 bg-zinc-950 p-6 text-center">
          <h2 className="mb-3 text-2xl font-semibold">
            Desenvolvido para o TCC
          </h2>

          <p className="mx-auto max-w-3xl leading-7 text-gray-400">
            O GymFlow foi desenvolvido como projeto acadêmico, aplicando
            conhecimentos de desenvolvimento de software, interfaces web,
            banco de dados e desenvolvimento de sistemas.
          </p>
        </div>
      </section>
    </main>
  );
}