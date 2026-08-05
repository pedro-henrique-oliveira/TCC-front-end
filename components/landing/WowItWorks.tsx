import {
  Building2,
  Users,
  Dumbbell,
  Smartphone,
  LucideIcon,
} from "lucide-react";

import Container from "@/components/ui/Container";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: Building2,
    title: "Cadastre sua academia",
    description:
      "Crie sua conta e configure todas as informações da academia em poucos minutos.",
  },
  {
    icon: Users,
    title: "Gerencie seus alunos",
    description:
      "Cadastre alunos, acompanhe pagamentos, frequência e organize todas as informações em um único lugar.",
  },
  {
    icon: Dumbbell,
    title: "Monte treinos personalizados",
    description:
      "Crie fichas de treino completas e atualize os exercícios sempre que necessário.",
  },
  {
    icon: Smartphone,
    title: "Aluno acompanha pelo aplicativo",
    description:
      "Os alunos visualizam seus treinos, acompanham a evolução e ficam sempre conectados com a academia.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-gradient-to-b from-zinc-950 to-black py-24"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400">
            Como Funciona
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Da gestão da academia
            <br />
            ao treino do aluno.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Em apenas quatro etapas o GymFlow conecta toda a administração da
            academia com a experiência dos alunos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group relative flex h-full cursor-default flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-400/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                  <Icon size={30} />
                </div>

                <span className="text-sm font-semibold text-yellow-400">
                  Etapa {index + 1}
                </span>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {step.description}
                </p>

                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-yellow-400 to-yellow-300 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
