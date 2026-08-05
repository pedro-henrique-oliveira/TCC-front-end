import Navbar from "@/components/layout/Navibar";

export default function Benefits() {
  return (
    <section className="bg-zinc-950">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 pt-10">
            Nossas Benefícias
          </h2>

          <p className="text-zinc-400 text-lg">
            Descubra as vantagens que a TCC2 oferece.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-zinc-900 border border-yellow-400 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">💰</span>
              <h3 className="text-2xl font-bold text-white">Financiamento</h3>
            </div>

            <div className="text-zinc-400 space-y-1 mb-6">
              <p>📍 Rua XV de Novembro, 500</p>
              <p>🕒 Atendimento 24 horas</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-center">
                <p className="text-zinc-500 text-sm">Alunos ativos</p>
                <p className="text-yellow-400 text-2xl font-bold">312</p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-center">
                <p className="text-zinc-500 text-sm">Capacidade</p>
                <p className="text-yellow-400 text-2xl font-bold">400</p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-center">
                <p className="text-zinc-500 text-sm">Ocupação</p>
                <p className="text-yellow-400 text-2xl font-bold">100%</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-zinc-500 text-sm mb-2">📍 Localização</p>

              <div className="rounded-xl overflow-hidden border border-zinc-800 h-56">
                <iframe
                  src="https://maps.google.com/maps?q=Rua XV de Novembro 500 Curitiba&output=embed&z=16"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa"
                />
              </div>
            </div>

            <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 rounded-lg transition">
              ✕ Fechar
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-900 border border-yellow-400 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">📚</span>
              <h3 className="text-2xl font-bold text-white">Biblioteca</h3>
            </div>

            <div className="text-zinc-400 space-y-1 mb-6">
              <p>📍 Rua XV de Novembro, 500</p>
              <p>🕒 Atendimento 24 horas</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-center">
                <p className="text-zinc-500 text-sm">Livros</p>
                <p className="text-yellow-400 text-2xl font-bold">8.500+</p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-center">
                <p className="text-zinc-500 text-sm">Salas</p>
                <p className="text-yellow-400 text-2xl font-bold">12</p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-center">
                <p className="text-zinc-500 text-sm">Wi-Fi</p>
                <p className="text-yellow-400 text-2xl font-bold">100%</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-zinc-500 text-sm mb-2">📍 Localização</p>

              <div className="rounded-xl overflow-hidden border border-zinc-800 h-56">
                <iframe
                  src="https://maps.google.com/maps?q=Rua XV de Novembro 500 Curitiba&output=embed&z=16"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa"
                />
              </div>
            </div>

            <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 rounded-lg transition">
              ✕ Fechar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
