import {
  BarChart3,
  CalendarDays,
  CreditCard,
  Dumbbell,
  LucideIcon,
  Smartphone,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Users,
    title: "Gestão de Alunos",
    description:
      "Cadastre alunos, acompanhe frequência, histórico e mantenha todas as informações organizadas.",
  },
  {
    icon: Dumbbell,
    title: "Treinos Personalizados",
    description:
      "Crie fichas completas, personalize exercícios e acompanhe a evolução dos alunos.",
  },
  {
    icon: CreditCard,
    title: "Mensalidades",
    description:
      "Gerencie pagamentos, controle inadimplência e acompanhe receitas da academia.",
  },
  {
    icon: CalendarDays,
    title: "Controle de Frequência",
    description:
      "Registre presenças e acompanhe a frequência dos alunos em tempo real.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Inteligentes",
    description:
      "Visualize indicadores importantes através de gráficos e estatísticas detalhadas.",
  },
  {
    icon: Smartphone,
    title: "Aplicativo do Aluno",
    description:
      "Os alunos podem acessar treinos, acompanhar a evolução e consultar informações pelo celular.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-black py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400">
            Benefícios
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Gerencie sua academia de forma inteligente.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Centralize alunos, treinos, pagamentos e relatórios em uma
            plataforma moderna, rápida e intuitiva.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex h-full cursor-default flex-col rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-yellow-400/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
