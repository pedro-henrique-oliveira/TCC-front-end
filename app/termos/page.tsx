import Link from "next/link";

export default function TermosDeUso() {
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
            Termos de Uso
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Conheça as regras e condições para utilização do sistema
            GymFlow.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Última atualização: 13 de agosto de 2026
          </p>
        </div>

        <div className="space-y-6">

          {/* 1 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              1. Sobre o GymFlow
            </h2>

            <p className="leading-7 text-gray-400">
              O GymFlow é um sistema desenvolvido para auxiliar no
              gerenciamento de academias, oferecendo recursos para
              organização de alunos, funcionários, treinos, planos,
              pagamentos e outras informações administrativas.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              A utilização do sistema implica na concordância com os
              presentes Termos de Uso.
            </p>
          </section>

          {/* 2 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              2. Acesso ao sistema
            </h2>

            <p className="leading-7 text-gray-400">
              O acesso às funcionalidades do GymFlow pode depender da
              criação de uma conta e da utilização de credenciais de
              acesso.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              O usuário é responsável por manter suas informações de
              acesso seguras e não deve compartilhar sua senha ou
              credenciais com pessoas não autorizadas.
            </p>
          </section>

          {/* 3 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              3. Responsabilidades do usuário
            </h2>

            <p className="mb-4 leading-7 text-gray-400">
              Ao utilizar o GymFlow, o usuário se compromete a:
            </p>

            <ul className="list-disc space-y-2 pl-6 text-gray-400">
              <li>
                Fornecer informações verdadeiras e atualizadas;
              </li>

              <li>
                Utilizar o sistema de forma adequada e responsável;
              </li>

              <li>
                Manter suas credenciais de acesso em segurança;
              </li>

              <li>
                Não tentar acessar informações de outros usuários sem
                autorização;
              </li>

              <li>
                Não utilizar o sistema para atividades ilegais ou
                indevidas;
              </li>

              <li>
                Não tentar comprometer a segurança ou o funcionamento
                da plataforma.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              4. Uso adequado da plataforma
            </h2>

            <p className="leading-7 text-gray-400">
              O GymFlow deve ser utilizado exclusivamente para as
              finalidades relacionadas ao gerenciamento e organização
              das atividades de uma academia.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              É proibida a utilização da plataforma para tentar obter
              acesso não autorizado, modificar dados de terceiros,
              prejudicar outros usuários ou interferir no funcionamento
              do sistema.
            </p>
          </section>

          {/* 5 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              5. Informações cadastradas
            </h2>

            <p className="leading-7 text-gray-400">
              O usuário ou administrador responsável pela academia é
              responsável pelas informações inseridas no sistema,
              incluindo dados de alunos, funcionários, treinos e
              informações administrativas.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              As informações cadastradas devem ser verdadeiras,
              atualizadas e utilizadas de acordo com a legislação
              aplicável.
            </p>
          </section>

          {/* 6 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              6. Disponibilidade do sistema
            </h2>

            <p className="leading-7 text-gray-400">
              O GymFlow busca manter o sistema disponível e funcionando
              corretamente. Entretanto, podem ocorrer interrupções
              temporárias causadas por manutenção, atualizações,
              problemas técnicos ou fatores externos.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Sempre que possível, eventuais manutenções ou
              indisponibilidades serão realizadas de forma a minimizar
              os impactos para os usuários.
            </p>
          </section>

          {/* 7 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              7. Segurança
            </h2>

            <p className="leading-7 text-gray-400">
              O GymFlow busca adotar medidas de segurança para proteger
              as informações armazenadas e impedir acessos não
              autorizados.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Entretanto, nenhum sistema conectado à internet pode
              garantir segurança absoluta contra todos os riscos
              existentes.
            </p>
          </section>

          {/* 8 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              8. Propriedade intelectual
            </h2>

            <p className="leading-7 text-gray-400">
              A estrutura, identidade visual, código, elementos gráficos
              e demais componentes desenvolvidos especificamente para o
              GymFlow pertencem aos responsáveis pelo projeto, salvo
              quando indicado de forma diferente.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Não é permitido copiar, modificar, distribuir ou
              comercializar componentes do sistema sem autorização,
              respeitando-se também as licenças de bibliotecas e
              ferramentas de terceiros utilizadas no projeto.
            </p>
          </section>

          {/* 9 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              9. Suspensão ou encerramento do acesso
            </h2>

            <p className="leading-7 text-gray-400">
              O acesso de um usuário poderá ser suspenso ou encerrado
              caso sejam identificadas atividades que violem estes
              Termos de Uso, comprometam a segurança da plataforma ou
              estejam em desacordo com a legislação aplicável.
            </p>
          </section>

          {/* 10 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              10. Alterações nos Termos de Uso
            </h2>

            <p className="leading-7 text-gray-400">
              Estes Termos de Uso poderão ser atualizados sempre que
              necessário para acompanhar alterações nas funcionalidades
              do GymFlow, melhorias do sistema ou mudanças nas
              condições de utilização.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              A versão mais recente estará disponível nesta página.
            </p>
          </section>

          {/* 11 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              11. Contato
            </h2>

            <p className="leading-7 text-gray-400">
              Em caso de dúvidas sobre estes Termos de Uso ou sobre o
              funcionamento do GymFlow, o usuário poderá entrar em
              contato com a equipe responsável pelo sistema.
            </p>
          </section>

          {/* Projeto acadêmico */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6 text-center">
            <h2 className="mb-3 text-xl font-semibold">
              Projeto acadêmico
            </h2>

            <p className="mx-auto max-w-3xl leading-7 text-gray-500">
              O GymFlow foi desenvolvido como projeto acadêmico para
              um Trabalho de Conclusão de Curso (TCC), com o objetivo
              de aplicar conhecimentos de desenvolvimento de software,
              interfaces web, banco de dados e desenvolvimento de
              sistemas.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}