"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navibar";

const units = [
  {
    name: "Centro",
    address: "Rua XV de Novembro, 500",
    hours: "24 horas",
    alunos: 312,
    capacidade: 400,
    query: "Rua XV de Novembro 500 Curitiba",
  },
  {
    name: "Batel",
    address: "Av. Batel, 1200",
    hours: "24 horas",
    alunos: 287,
    capacidade: 350,
    query: "Avenida Batel 1200 Curitiba",
  },
  {
    name: "Água Verde",
    address: "Av. República Argentina, 850",
    hours: "24 horas",
    alunos: 198,
    capacidade: 300,
    query: "Avenida República Argentina 850 Curitiba",
  },
];

export default function Unit() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="">
      <div className="">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 py-10">
            Nossas Unidades
          </h2>
          <p className="text-zinc-500 text-sm">
            Encontre a unidade mais próxima de você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {units.map((unit, i) => {
            const isExpanded = expanded === i;
            const ocup = Math.round((unit.alunos / unit.capacidade) * 100);
            const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(unit.query)}&output=embed&z=16`;

            return (
              <div
                key={unit.name}
                className={`bg-zinc-900 border rounded-2xl p-7 transition-all duration-300 ${
                  isExpanded
                    ? "md:col-span-3 border-yellow-400"
                    : "border-zinc-800 hover:border-yellow-400"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-white text-xl font-bold">{unit.name}</h3>
                  {isExpanded && (
                    <span className="text-xs bg-green-950 text-green-400 px-3 py-1 rounded-full font-semibold">
                      Aberto 24h
                    </span>
                  )}
                </div>

                <div className="text-zinc-400 text-sm space-y-1">
                  <p>📍 {unit.address}</p>
                  {!isExpanded && <p>🕒 {unit.hours}</p>}
                </div>

                {isExpanded && (
                  <div className="flex flex-col md:flex-row gap-6 mt-6">
                    <div className="flex-1">
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {[
                          { label: "Alunos ativos", value: unit.alunos },
                          { label: "Capacidade", value: unit.capacidade },
                          { label: "Ocupação", value: `${ocup}%` },
                        ].map((s) => (
                          <div
                            key={s.label}
                            className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-center"
                          >
                            <p className="text-zinc-500 text-xs mb-1">
                              {s.label}
                            </p>
                            <p className="text-yellow-400 text-2xl font-bold">
                              {s.value}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4">
                        <p className="text-zinc-500 text-xs mb-3">
                          Ocupação atual
                        </p>
                        <div className="bg-zinc-800 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-yellow-400 h-full rounded-full transition-all"
                            style={{ width: `${ocup}%` }}
                          />
                        </div>
                        <p className="text-zinc-500 text-xs mt-2">
                          {unit.alunos} de {unit.capacidade} vagas
                        </p>
                      </div>

                      <button
                        onClick={() => setExpanded(null)}
                        className="w-full mt-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                      >
                        ✕ Fechar
                      </button>
                    </div>

                    <div className="w-full md:w-80 shrink-0">
                      <p className="text-zinc-500 text-xs mb-2">
                        📍 Localização
                      </p>
                      <div className="rounded-xl overflow-hidden border border-zinc-800 h-56">
                        <iframe
                          src={mapSrc}
                          className="w-full h-full border-none"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {!isExpanded && (
                  <button
                    onClick={() => setExpanded(i)}
                    className="w-full mt-6 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-lg transition-colors"
                  >
                    Ver unidade
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
