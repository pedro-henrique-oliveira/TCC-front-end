import Link from "next/link";

const secoes = [
  {
    id: "introducao",
    titulo: "1. Introdução",
    descricao:
      "Conheça o GymFlow e entenda como a plataforma pode ser utilizada para organizar o gerenciamento da academia.",
  },
  {
    id: "acesso",
    titulo: "2. Acesso ao sistema",
    descricao:
      "Aprenda como realizar o login e acessar o painel administrativo.",
  },
  {
    id: "alunos",
    titulo: "3. Gerenciamento de alunos",
    descricao:
      "Veja como cadastrar, consultar, editar e organizar os alunos.",
  },
  {
    id: "funcionarios",
    titulo: "4. Funcionários",
    descricao:
      "Gerencie os funcionários e suas informações dentro do sistema.",
  },
  {
    id: "treinos",
    titulo: "5. Treinos",
    descricao:
      "Crie e organize treinos para os alunos da academia.",
  },
  {
    id: "pagamentos",
    titulo: "6. Pagamentos e mensalidades",
    descricao:
      "Acompanhe mensalidades, pagamentos pendentes e pagamentos atrasados.",
  },
  {
    id: "dashboard",
    titulo: "7. Dashboard",
    descricao:
      "Entenda as principais informações apresentadas no painel inicial.",
  },
  {
    id: "seguranca",
    titulo: "8. Segurança",
    descricao:
      "Boas práticas para manter o acesso e as informações do sistema seguros.",
  },
  {
    id: "problemas",
    titulo: "9. Solução de problemas",
    descricao:
      "Confira algumas soluções para problemas comuns durante a utilização.",
  },
];

export default function Documentacao() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <section className="mx-auto max-w-6xl">

        {/* Botão voltar */}
        <Link
          href="/suporte"
          className="mb-10 inline-flex items-center gap-2 rounded-lg border border-gray-800 bg-zinc-950 px-4 py-2 text-sm text-gray-300 transition hover:border-gray-600 hover:bg-zinc-900 hover:text-white"
        >
          ← Voltar
        </Link>

        {/* Cabeçalho */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-500">
            GymFlow
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Documentação
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            Bem-vindo à documentação do GymFlow. Aqui você encontrará
            informações sobre as principais funcionalidades da plataforma,
            instruções de utilização e soluções para problemas comuns.
          </p>
        </div>

        {/* Layout documentação */}
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">

          {/* Menu lateral */}
          <aside className="h-fit rounded-2xl border border-gray-800 bg-zinc-950 p-5 lg:sticky lg:top-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Neste documento
            </h2>

            <nav className="space-y-1">
              {secoes.map((secao) => (
                <a
                  key={secao.id}
                  href={`#${secao.id}`}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-400 transition hover:bg-zinc-900 hover:text-white"
                >
                  {secao.titulo}
                </a>
              ))}
            </nav>
          </aside>

          {/* Conteúdo */}
          <div className="space-y-8">

            {/* Introdução */}
            <section
              id="introducao"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-zinc-950 p-7"
            >
              <h2 className="mb-4 text-2xl font-semibold">
                1. Introdução
              </h2>

              <p className="leading-7 text-gray-400">
                O GymFlow é um sistema desenvolvido para auxiliar no
                gerenciamento de academias. A plataforma reúne diferentes
                recursos administrativos em um único ambiente.
              </p>

              <p className="mt-4 leading-7 text-gray-400">
                Entre as principais funcionalidades estão o gerenciamento
                de alunos, funcionários, treinos, pagamentos, mensalidades
                e informações administrativas.
              </p>
            </section>

            {/* Acesso */}
            <section
              id="acesso"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-zinc-950 p-7"
            >
              <h2 className="mb-4 text-2xl font-semibold">
                2. Acesso ao sistema
              </h2>

              <p className="leading-7 text-gray-400">
                Para utilizar o GymFlow, o usuário deve acessar a tela de
                login e informar suas credenciais.
              </p>

              <div className="mt-6 rounded-xl border border-gray-800 bg-black p-5">
                <h3 className="mb-3 font-semibold text-gray-200">
                  Passo a passo
                </h3>

                <ol className="list-decimal space-y-2 pl-5 text-gray-400">
                  <li>Acesse a página de login.</li>
                  <li>Informe seu e-mail cadastrado.</li>
                  <li>Digite sua senha.</li>
                  <li>Clique no botão de entrar.</li>
                  <li>Aguarde o carregamento do painel.</li>
                </ol>
              </div>

              <p className="mt-5 leading-7 text-gray-400">
                Caso os dados estejam incorretos, o sistema poderá
                apresentar uma mensagem informando que as credenciais
                não são válidas.
              </p>
            </section>

            {/* Alunos */}
            <section
              id="alunos"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-zinc-950 p-7"
            >
              <h2 className="mb-4 text-2xl font-semibold">
                3. Gerenciamento de alunos
              </h2>

              <p className="leading-7 text-gray-400">
                A área de alunos permite organizar os cadastros das pessoas
                matriculadas na academia.
              </p>

              <h3 className="mt-6 mb-3 text-lg font-semibold">
                Cadastrar aluno
              </h3>

              <ol className="list-decimal space-y-2 pl-5 text-gray-400">
                <li>Acesse a área de Alunos.</li>
                <li>Selecione a opção de novo cadastro.</li>
                <li>Preencha os dados solicitados.</li>
                <li>Confira as informações.</li>
                <li>Confirme o cadastro.</li>
              </ol>

              <h3 className="mt-6 mb-3 text-lg font-semibold">
                Editar aluno
              </h3>

              <p className="leading-7 text-gray-400">
                Localize o aluno desejado na lista de cadastros, selecione
                a opção de edição, altere as informações necessárias e
                salve as modificações.
              </p>

              <h3 className="mt-6 mb-3 text-lg font-semibold">
                Excluir aluno
              </h3>

              <p className="leading-7 text-gray-400">
                A exclusão deve ser realizada somente quando necessário,
                pois pode remover o cadastro e informações relacionadas
                ao aluno, dependendo da implementação do sistema.
              </p>
            </section>

            {/* Funcionários */}
            <section
              id="funcionarios"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-zinc-950 p-7"
            >
              <h2 className="mb-4 text-2xl font-semibold">
                4. Funcionários
              </h2>

              <p className="leading-7 text-gray-400">
                A área de funcionários permite cadastrar e organizar as
                informações dos profissionais que trabalham na academia.
              </p>

              <div className="mt-6 rounded-xl border border-gray-800 bg-black p-5">
                <h3 className="mb-3 font-semibold text-gray-200">
                  Operações disponíveis
                </h3>

                <ul className="list-disc space-y-2 pl-5 text-gray-400">
                  <li>Cadastrar funcionário;</li>
                  <li>Consultar funcionários;</li>
                  <li>Editar informações;</li>
                  <li>Visualizar dados cadastrados;</li>
                  <li>Remover cadastro quando necessário.</li>
                </ul>
              </div>
            </section>

            {/* Treinos */}
            <section
              id="treinos"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-zinc-950 p-7"
            >
              <h2 className="mb-4 text-2xl font-semibold">
                5. Treinos
              </h2>

              <p className="leading-7 text-gray-400">
                O módulo de treinos permite organizar os exercícios
                realizados pelos alunos e relacionar os treinos aos
                respectivos profissionais responsáveis.
              </p>

              <h3 className="mt-6 mb-3 text-lg font-semibold">
                Criar um treino
              </h3>

              <ol className="list-decimal space-y-2 pl-5 text-gray-400">
                <li>Acesse a área de Treinos.</li>
                <li>Clique em adicionar treino.</li>
                <li>Informe o nome do treino.</li>
                <li>Adicione os exercícios necessários.</li>
                <li>Configure séries e repetições.</li>
                <li>Relacione o treino ao aluno quando necessário.</li>
                <li>Salve o treino.</li>
              </ol>

              <h3 className="mt-6 mb-3 text-lg font-semibold">
                Relação entre aluno, funcionário e treino
              </h3>

              <p className="leading-7 text-gray-400">
                Um treino pode ser associado a um aluno e a um funcionário
                responsável, permitindo identificar quem realiza o treino
                e qual profissional está responsável pelo acompanhamento.
              </p>
            </section>

            {/* Pagamentos */}
            <section
              id="pagamentos"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-zinc-950 p-7"
            >
              <h2 className="mb-4 text-2xl font-semibold">
                6. Pagamentos e mensalidades
              </h2>

              <p className="leading-7 text-gray-400">
                A área financeira permite acompanhar as mensalidades e
                pagamentos relacionados aos alunos.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <div className="rounded-xl border border-gray-800 bg-black p-5">
                  <h3 className="font-semibold text-gray-200">
                    Pagos
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Mensalidades que já foram pagas.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-800 bg-black p-5">
                  <h3 className="font-semibold text-gray-200">
                    Pendentes
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Pagamentos que ainda aguardam confirmação.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-800 bg-black p-5">
                  <h3 className="font-semibold text-gray-200">
                    Atrasados
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Mensalidades que ultrapassaram a data de vencimento.
                  </p>
                </div>

              </div>
            </section>

            {/* Dashboard */}
            <section
              id="dashboard"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-zinc-950 p-7"
            >
              <h2 className="mb-4 text-2xl font-semibold">
                7. Dashboard
              </h2>

              <p className="leading-7 text-gray-400">
                O Dashboard apresenta uma visão geral das principais
                informações da academia, permitindo acompanhar
                rapidamente indicadores importantes.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">

                <div className="rounded-xl border border-gray-800 bg-black p-5">
                  <h3 className="font-semibold">
                    Alunos
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Quantidade e informações gerais dos alunos cadastrados.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-800 bg-black p-5">
                  <h3 className="font-semibold">
                    Funcionários
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Informações relacionadas aos profissionais cadastrados.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-800 bg-black p-5">
                  <h3 className="font-semibold">
                    Receitas
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Acompanhamento das receitas e movimentações financeiras.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-800 bg-black p-5">
                  <h3 className="font-semibold">
                    Pagamentos
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Resumo dos pagamentos realizados e pendentes.
                  </p>
                </div>

              </div>
            </section>

            {/* Segurança */}
            <section
              id="seguranca"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-zinc-950 p-7"
            >
              <h2 className="mb-4 text-2xl font-semibold">
                8. Segurança
              </h2>

              <p className="leading-7 text-gray-400">
                Para utilizar o GymFlow com segurança, recomenda-se
                seguir algumas boas práticas.
              </p>

              <ul className="mt-5 list-disc space-y-3 pl-5 text-gray-400">
                <li>
                  Não compartilhe sua senha com outras pessoas.
                </li>

                <li>
                  Utilize senhas fortes e difíceis de adivinhar.
                </li>

                <li>
                  Sempre encerre sua sessão em computadores compartilhados.
                </li>

                <li>
                  Não compartilhe informações de outros usuários sem
                  autorização.
                </li>

                <li>
                  Informe à equipe responsável caso identifique algum
                  comportamento suspeito.
                </li>
              </ul>
            </section>

            {/* Problemas */}
            <section
              id="problemas"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-zinc-950 p-7"
            >
              <h2 className="mb-4 text-2xl font-semibold">
                9. Solução de problemas
              </h2>

              <h3 className="mb-2 text-lg font-semibold">
                Não consigo fazer login
              </h3>

              <p className="leading-7 text-gray-400">
                Confira se o e-mail e a senha estão corretos. Caso o
                problema continue, utilize o recurso de recuperação de
                senha ou entre em contato com o administrador.
              </p>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                Uma informação não aparece
              </h3>

              <p className="leading-7 text-gray-400">
                Verifique se o cadastro foi realizado corretamente e se
                você possui permissão para visualizar aquela informação.
              </p>

              <h3 className="mt-6 mb-2 text-lg font-semibold">
                O sistema apresentou um erro
              </h3>

              <p className="leading-7 text-gray-400">
                Tente atualizar a página e repetir a operação. Se o erro
                continuar, anote a ação que estava sendo realizada e
                entre em contato com o suporte.
              </p>
            </section>

          </div>
        </div>

        {/* Ajuda */}
        <section className="mt-12 rounded-2xl border border-gray-800 bg-zinc-950 p-8 text-center">
          <h2 className="text-2xl font-semibold">
            Ainda precisa de ajuda?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-400">
            Se a documentação não resolveu sua dúvida, entre em contato
            com a equipe responsável pelo GymFlow.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/suporte"
              className="rounded-lg border border-gray-700 px-5 py-3 text-sm text-gray-300 transition hover:bg-zinc-900 hover:text-white"
            >
              Central de suporte
            </Link>

            <Link
              href="/contato"
              className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              Entrar em contato
            </Link>
          </div>
        </section>

        {/* Rodapé */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            GymFlow • Documentação
          </p>
        </div>

      </section>
    </main>
  );
}