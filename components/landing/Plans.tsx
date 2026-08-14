import { Check } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

type Plan = {
  name: string;
  subtitle: string;
  price: number;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    subtitle: "Ideal para pequenas academias",
    price: 99,
    features: [
      "Até 100 alunos",
      "Cadastro de alunos",
      "Gestão de treinos",
      "Controle de mensalidades",
      "Suporte por e-mail",
    ],
  },
  {
    name: "Professional",
    subtitle: "A melhor escolha para crescer",
    price: 199,
    featured: true,
    features: [
      "Até 500 alunos",
      "Aplicativo do aluno",
      "Dashboard completo",
      "Relatórios inteligentes",
      "Controle de check-ins",
      "Suporte prioritário",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Para redes de academias",
    price: 399,
    features: [
      "Alunos ilimitados",
      "Múltiplas unidades",
      "Backup automático",
      "API de integração",
      "Relatórios avançados",
      "Suporte exclusivo",
    ],
  },
];

export default function Plans() {
  return (
    <section
      id="planos"
      className="bg-linear-to-b from-black to-zinc-950 py-24"
    >
      <Container>
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400">
            Planos
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Escolha o plano ideal
            <span className="text-yellow-400"> para sua academia</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Todos os planos incluem atualizações gratuitas, suporte e acesso à
            plataforma GymFlow.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 ${
                plan.featured
                  ? "scale-105 border-yellow-400 bg-zinc-900 shadow-2xl shadow-yellow-400/10"
                  : "border-zinc-800 bg-zinc-900/70 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-xl hover:shadow-yellow-400/10"
              }`}
            >
              {/* Badge */}
              {plan.featured && (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-black">
                  Mais Escolhido
                </span>
              )}

              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>

              <p className="mt-2 text-sm text-zinc-400">{plan.subtitle}</p>

              <div className="mt-8">
                <span className="text-5xl font-bold text-yellow-400">
                  R$ {plan.price}
                </span>

                <span className="ml-2 text-zinc-500">/mês</span>
              </div>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400/10">
                      <Check size={16} className="text-yellow-400" />
                    </div>

                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button className="w-full">Solicitar Plano</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400">
            ✔ Sem fidelidade &nbsp;&nbsp;•&nbsp;&nbsp; ✔ Atualizações gratuitas
            &nbsp;&nbsp;•&nbsp;&nbsp; ✔ Suporte incluso
            &nbsp;&nbsp;•&nbsp;&nbsp; ✔ Backup automático
          </p>
        </div>
      </Container>
    </section>
  );
}
