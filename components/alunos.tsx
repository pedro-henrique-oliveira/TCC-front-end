"use client";

import { useState, useMemo } from "react";
import Sidebar from "@/components/navigation";

// ── Types ──────────────────────────────────────────────────────────────────
type StatusAluno = "Ativo" | "Inativo" | "Vencendo";

interface Aluno {
  id: number;
  nome: string;
  email: string;
  status: StatusAluno;
}

// ── Mock data ──────────────────────────────────────────────────────────────
const ALUNOS_MOCK: Aluno[] = [
  { id: 1, nome: "Carlos Silva", email: "carlos@email.com", status: "Ativo" },
  { id: 2, nome: "Ana Ferreira", email: "ana@email.com", status: "Vencendo" },
  { id: 3, nome: "Rafael Mendes", email: "rafael@email.com", status: "Ativo" },
  {
    id: 4,
    nome: "Julia Oliveira",
    email: "julia@email.com",
    status: "Inativo",
  },
  {
    id: 5,
    nome: "Patricia Santos",
    email: "patricia@email.com",
    status: "Ativo",
  },
  { id: 6, nome: "Marcos Lima", email: "marcos@email.com", status: "Ativo" },
  {
    id: 7,
    nome: "Fernanda Costa",
    email: "fernanda@email.com",
    status: "Vencendo",
  },
  { id: 8, nome: "Bruno Alves", email: "bruno@email.com", status: "Inativo" },
];

const PER_PAGE = 5;

// ── Helpers ────────────────────────────────────────────────────────────────
function getInitials(nome: string) {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

const AVATAR_COLORS = [
  "bg-violet-900/40 text-violet-300",
  "bg-teal-900/40 text-teal-300",
  "bg-orange-900/40 text-orange-300",
  "bg-blue-900/40 text-blue-300",
  "bg-pink-900/40 text-pink-300",
  "bg-green-900/40 text-green-300",
];

function avatarColor(id: number) {
  return AVATAR_COLORS[id % AVATAR_COLORS.length];
}

const STATUS_BADGE: Record<StatusAluno, string> = {
  Ativo: "bg-teal-900/40 text-teal-300 border border-teal-800/50",
  Vencendo: "bg-amber-900/40 text-amber-300 border border-amber-800/50",
  Inativo: "bg-red-900/40 text-red-300 border border-red-800/50",
};

// ── Badge ──────────────────────────────────────────────────────────────────
function Badge({ label, className }: { label: string; className: string }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────
function IconSearch() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}
function IconPlus() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
function IconDownload() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
function IconEye() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconEdit() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}
function IconTrash() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}
function IconTrendingUp() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
function IconChevronLeft() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function IconChevronRight() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// ── Stat Card ──────────────────────────────────────────────────────────────
function StatCard({
  label,
  value,
  sub,
  subColor = "text-zinc-500",
}: {
  label: string;
  value: string | number;
  sub: React.ReactNode;
  subColor?: string;
}) {
  return (
    <div
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-4"
      style={{ background: "rgba(0,0,0,0.7)" }}
    >
      <p className="text-xs text-zinc-500 mb-1">{label}</p>
      <p className="text-2xl font-semibold text-zinc-100">{value}</p>
      <p className={`text-xs mt-1 ${subColor}`}>{sub}</p>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function AlunosPage() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"" | StatusAluno>("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return ALUNOS_MOCK.filter((a) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        a.nome.toLowerCase().includes(q) ||
        a.email.toLowerCase().includes(q);
      const matchStatus = !filterStatus || a.status === filterStatus;
      return matchSearch && matchStatus;
    });
  }, [search, filterStatus]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleSearch = (v: string) => {
    setSearch(v);
    setPage(1);
  };
  const handleStatus = (v: string) => {
    setFilterStatus(v as "" | StatusAluno);
    setPage(1);
  };

  const total = ALUNOS_MOCK.length;
  const ativos = ALUNOS_MOCK.filter((a) => a.status === "Ativo").length;
  const vencendo = ALUNOS_MOCK.filter((a) => a.status === "Vencendo").length;
  const inativos = ALUNOS_MOCK.filter((a) => a.status === "Inativo").length;

  return (
    <div
      className="flex min-h-screen bg-[#1a1a2e] text-zinc-100"
      style={{ background: "rgba(0,0,0,0.7)" }}
    >
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Alunos</h1>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300 text-sm hover:bg-zinc-800 transition-colors">
                <IconDownload />
                Exportar
              </button>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors">
                <IconPlus />
                Novo aluno
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <StatCard
              label="Total de alunos"
              value={total}
              sub={
                <span className="flex items-center gap-1 text-teal-400">
                  <IconTrendingUp /> +12 este mês
                </span>
              }
            />
            <StatCard
              label="Ativos"
              value={ativos}
              sub={`${Math.round((ativos / total) * 100)}% do total`}
            />
            <StatCard
              label="Planos vencendo"
              value={vencendo}
              sub="Nos próximos 7 dias"
              subColor="text-amber-400"
            />
            <StatCard
              label="Inativos"
              value={inativos}
              sub={`${Math.round((inativos / total) * 100)}% do total`}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                <IconSearch />
              </span>
              <input
                type="text"
                placeholder="Buscar por nome ou e-mail..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-zinc-700 bg-zinc-900 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => handleStatus(e.target.value)}
              className="px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-900 text-sm text-zinc-300 focus:outline-none focus:border-violet-500 transition-colors"
            >
              <option value="">Todos os status</option>
              <option value="Ativo">Ativo</option>
              <option value="Vencendo">Vencendo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>

          {/* Table */}
          <div className="border border-zinc-800 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-900 border-b border-zinc-800">
                  <th className="text-left px-4 py-3 text-xs font-medium text-zinc-500 w-[60%]">
                    Aluno
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-zinc-500 w-[20%]">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-zinc-500 w-[20%]">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/70">
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center py-10 text-zinc-500">
                      Nenhum aluno encontrado.
                    </td>
                  </tr>
                ) : (
                  paginated.map((aluno) => (
                    <tr
                      key={aluno.id}
                      className="hover:bg-zinc-900/60 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${avatarColor(aluno.id)}`}
                          >
                            {getInitials(aluno.nome)}
                          </div>
                          <div>
                            <p className="font-medium text-zinc-100">
                              {aluno.nome}
                            </p>
                            <p className="text-xs text-zinc-500">
                              {aluno.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          label={aluno.status}
                          className={STATUS_BADGE[aluno.status]}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <button
                            title="Ver perfil"
                            className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                          >
                            <IconEye />
                          </button>
                          <button
                            title="Editar"
                            className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                          >
                            <IconEdit />
                          </button>
                          <button
                            title="Excluir"
                            className="p-1.5 rounded-md text-zinc-500 hover:text-red-400 hover:bg-red-900/20 transition-colors"
                          >
                            <IconTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-zinc-800 bg-zinc-900/50">
              <span className="text-xs text-zinc-500">
                Mostrando{" "}
                {filtered.length === 0 ? 0 : (page - 1) * PER_PAGE + 1}–
                {Math.min(page * PER_PAGE, filtered.length)} de{" "}
                {filtered.length} alunos
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-1.5 rounded-md border border-zinc-700 text-zinc-400 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <IconChevronLeft />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (n) => (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`w-8 h-8 rounded-md text-xs font-medium transition-colors ${
                        n === page
                          ? "bg-violet-600 text-white border border-violet-600"
                          : "border border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                      }`}
                    >
                      {n}
                    </button>
                  ),
                )}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages || totalPages === 0}
                  className="p-1.5 rounded-md border border-zinc-700 text-zinc-400 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <IconChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
