import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Image from "next/image";

const stats = [
  {
    value: "500+",
    label: "Alunos",
  },
  {
    value: "30+",
    label: "Academias",
  },
  {
    value: "1200+",
    label: "Treinos",
  },
  {
    value: "24h",
    label: "Disponível",
  },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-black">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-130 w-130 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[140px]" />
        <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-yellow-400/5 blur-[120px]" />
      </div>

      <Container className="relative flex min-h-[calc(100vh-64px)] items-center py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Texto */}
          <div>
            <span className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-400">
              Plataforma completa para academias
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
              Gerencie sua
              <span className="text-yellow-400"> academia </span>
              de forma
              <span className="text-yellow-400"> simples, rápida </span>e
              inteligente.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              O GymFlow centraliza alunos, treinos, mensalidades, relatórios e
              gestão da academia em uma única plataforma moderna, intuitiva e
              fácil de utilizar.
            </p>

            {/* Botões */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a href="#como-funciona">
                <Button variant="secondary">Ver Demonstração</Button>
              </a>
            </div>

            {/* Estatísticas */}
            <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <h3 className="text-3xl font-bold text-yellow-400">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem */}
          <div className="relative flex justify-center">
            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl transition duration-300 hover:scale-[1.02]">
              <Image
                src="/pessoas.png"
                alt="Dashboard do GymFlow"
                width={900}
                height={600}
                priority
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
