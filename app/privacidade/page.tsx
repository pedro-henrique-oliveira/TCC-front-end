import Link from "next/link";

export default function PoliticaDePrivacidade() {
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
            Política de Privacidade
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Entenda como o GymFlow coleta, utiliza, armazena e protege
            as informações utilizadas no sistema.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Última atualização: 13 de agosto de 2026
          </p>
        </div>

        <div className="space-y-6">

          {/* 1 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              1. Introdução
            </h2>

            <p className="leading-7 text-gray-400">
              O GymFlow é um sistema desenvolvido para auxiliar no
              gerenciamento de academias, permitindo a organização de
              informações relacionadas a alunos, funcionários, treinos,
              pagamentos e demais recursos administrativos.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Esta Política de Privacidade tem como objetivo explicar
              quais informações podem ser utilizadas pelo sistema e
              como esses dados são tratados.
            </p>
          </section>

          {/* 2 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              2. Informações coletadas
            </h2>

            <p className="mb-4 leading-7 text-gray-400">
              Dependendo das funcionalidades utilizadas, o GymFlow
              poderá armazenar informações necessárias para o
              funcionamento da plataforma, como:
            </p>

            <ul className="list-disc space-y-2 pl-6 text-gray-400">
              <li>Nome do aluno ou funcionário;</li>
              <li>Endereço de e-mail;</li>
              <li>Número de telefone;</li>
              <li>Informações relacionadas a planos e pagamentos;</li>
              <li>Informações relacionadas a treinos;</li>
              <li>Dados necessários para autenticação e acesso ao sistema.</li>
            </ul>
          </section>

          {/* 3 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              3. Como utilizamos os dados
            </h2>

            <p className="mb-4 leading-7 text-gray-400">
              As informações utilizadas pelo GymFlow têm como finalidade
              principal permitir o funcionamento das funcionalidades
              oferecidas pelo sistema.
            </p>

            <ul className="list-disc space-y-2 pl-6 text-gray-400">
              <li>Gerenciar o cadastro de alunos e funcionários;</li>
              <li>Organizar informações de treinos;</li>
              <li>Controlar planos e mensalidades;</li>
              <li>Facilitar o gerenciamento administrativo da academia;</li>
              <li>Permitir autenticação e controle de acesso;</li>
              <li>Melhorar a organização e utilização do sistema.</li>
            </ul>
          </section>

          {/* 4 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              4. Proteção das informações
            </h2>

            <p className="leading-7 text-gray-400">
              O GymFlow busca utilizar medidas técnicas e organizacionais
              adequadas para proteger as informações armazenadas contra
              acessos não autorizados, alterações indevidas, perda ou
              divulgação inadequada.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              O acesso às informações deve ser realizado somente por
              usuários autorizados, de acordo com as permissões
              disponibilizadas pelo sistema.
            </p>
          </section>

          {/* 5 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              5. Compartilhamento de informações
            </h2>

            <p className="leading-7 text-gray-400">
              O GymFlow não tem como objetivo comercializar ou divulgar
              informações pessoais dos usuários. Os dados devem ser
              utilizados exclusivamente para as finalidades relacionadas
              ao funcionamento e gerenciamento da academia.
            </p>
          </section>

          {/* 6 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              6. Armazenamento dos dados
            </h2>

            <p className="leading-7 text-gray-400">
              As informações cadastradas no sistema podem ser armazenadas
              em banco de dados para possibilitar o funcionamento das
              funcionalidades do GymFlow.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Os dados devem ser mantidos pelo período necessário para
              cumprir as finalidades para as quais foram coletados ou
              conforme as necessidades administrativas do sistema.
            </p>
          </section>

          {/* 7 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              7. Direitos dos usuários
            </h2>

            <p className="mb-4 leading-7 text-gray-400">
              Os usuários podem solicitar informações relacionadas aos
              seus dados cadastrados no sistema, incluindo, quando
              aplicável:
            </p>

            <ul className="list-disc space-y-2 pl-6 text-gray-400">
              <li>Acesso às informações cadastradas;</li>
              <li>Correção de informações incorretas;</li>
              <li>Atualização dos dados;</li>
              <li>Solicitação de exclusão, quando aplicável;</li>
              <li>Esclarecimentos sobre a utilização das informações.</li>
            </ul>
          </section>

          {/* 8 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              8. Cookies e tecnologias semelhantes
            </h2>

            <p className="leading-7 text-gray-400">
              O GymFlow poderá utilizar recursos técnicos necessários
              para manter o funcionamento adequado do sistema, como
              armazenamento de informações relacionadas à sessão e
              autenticação do usuário.
            </p>
          </section>

          {/* 9 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              9. Alterações nesta política
            </h2>

            <p className="leading-7 text-gray-400">
              Esta Política de Privacidade poderá ser atualizada para
              refletir mudanças nas funcionalidades do GymFlow ou nos
              procedimentos utilizados para tratamento das informações.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Recomendamos que os usuários consultem esta página
              periodicamente para verificar eventuais alterações.
            </p>
          </section>

          {/* 10 */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-semibold">
              10. Contato
            </h2>

            <p className="leading-7 text-gray-400">
              Caso tenha dúvidas sobre esta Política de Privacidade ou
              sobre o tratamento das informações utilizadas pelo GymFlow,
              entre em contato com a equipe responsável pelo sistema.
            </p>
          </section>

          {/* Aviso acadêmico */}
          <section className="rounded-2xl border border-gray-800 bg-zinc-950 p-6 text-center">
            <h2 className="mb-3 text-xl font-semibold">
              Projeto acadêmico
            </h2>

            <p className="mx-auto max-w-3xl leading-7 text-gray-500">
              O GymFlow é um projeto desenvolvido para fins acadêmicos,
              como parte de um Trabalho de Conclusão de Curso (TCC).
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}