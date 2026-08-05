"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  UserCog,
  Wallet,
  Activity,
  Settings,
  ShieldCheck,
  LogOut,
  Search,
  Mail,
  X,
  Plus,
  TrendingUp,
  AlertTriangle,
  History,
  Bell,
  Download,
} from "lucide-react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Mock data — troque pelos dados reais vindos da sua API/DB

const adminInicial = {
  nome: "Camila Ferreira",
  cargo: "Administradora geral",
  email: "camila.ferreira@gymflow.com",
  unidade: "GymFlow Centro",
  ultimoAcesso: "30/07/2026 às 08:15",
};

const stats = [
  { label: "Alunos ativos", valor: "412", variacao: "+18 este mês", icon: Users },
  { label: "Funcionários", valor: "23", variacao: "3 instrutores em férias", icon: UserCog },
  { label: "Receita mensal", valor: "R$ 380.240", variacao: "+6,4% vs mês anterior", icon: Wallet },
  { label: "Check-ins hoje", valor: "187", variacao: "Pico às 18h", icon: Activity },
];

const alunosIniciais = [
  { nome: "Rafael Souza", plano: "Trimestral", status: "Ativo", desde: "12/03/2024" },
  { nome: "Beatriz Lima", plano: "Anual", status: "Ativo", desde: "02/01/2023" },
  { nome: "João Pedro Alves", plano: "Mensal", status: "Pendente", desde: "20/07/2026" },
  { nome: "Larissa Mendes", plano: "Trimestral", status: "Ativo", desde: "15/05/2025" },
  { nome: "Eduardo Castro", plano: "Mensal", status: "Inativo", desde: "08/02/2024" },
  { nome: "Camila Duarte", plano: "Anual", status: "Ativo", desde: "22/09/2023" },
  { nome: "Vinícius Prado", plano: "Trimestral", status: "Ativo", desde: "03/11/2025" },
];

const funcionariosIniciais = [
  { nome: "Tiago Ramos", cargo: "Instrutor de musculação", turno: "Manhã", status: "Ativo" },
  { nome: "Fernanda Costa", cargo: "Instrutora de cross training", turno: "Tarde", status: "Ativo" },
  { nome: "Marcos Vinícius", cargo: "Recepção", turno: "Manhã", status: "Ativo" },
  { nome: "Patrícia Nogueira", cargo: "Personal trainer", turno: "Noite", status: "Férias" },
];

const configInicial = {
  unidade: "GymFlow Centro",
  endereco: "Av. Exemplo, 1234 - Centro, Curitiba - PR",
  horario: "06:00 - 22:00 (seg a sex)",
  capacidadeMaxima: "120 alunos simultâneos",
};

const receitaPorMes = [
  { mes: "Fev", valor: 31200 },
  { mes: "Mar", valor: 33450 },
  { mes: "Abr", valor: 32100 },
  { mes: "Mai", valor: 34980 },
  { mes: "Jun", valor: 35900 },
  { mes: "Jul", valor: 38240 },
];

const receitaPorPlano = [
  { plano: "Mensal", valor: 8420, porcentagem: 22 },
  { plano: "Trimestral", valor: 15680, porcentagem: 41 },
  { plano: "Anual", valor: 14140, porcentagem: 37 },
];

const pagamentosIniciais = [
  { aluno: "Rafael Souza", valor: "R$ 89,90", data: "01/07/2026", status: "Pago" },
  { aluno: "Beatriz Lima", valor: "R$ 79,90", data: "01/07/2026", status: "Pago" },
  { aluno: "João Pedro Alves", valor: "R$ 99,90", data: "20/07/2026", status: "Atrasado" },
  { aluno: "Eduardo Castro", valor: "R$ 99,90", data: "08/07/2026", status: "Atrasado" },
  { aluno: "Larissa Mendes", valor: "R$ 89,90", data: "15/07/2026", status: "Pago" },
];

const atividadesIniciais = [
  { texto: "Novo aluno cadastrado: Vinícius Prado", tempo: "há 2 horas" },
  { texto: "Pagamento de Beatriz Lima confirmado", tempo: "há 5 horas" },
  { texto: "Funcionária Fernanda Costa atualizou o horário de aulas", tempo: "ontem" },
  { texto: "Plano de João Pedro Alves marcado como atrasado", tempo: "há 2 dias" },
];

function statusColor(status: string) {
  switch (status) {
    case "Ativo":
      return "border-emerald-400/30 bg-emerald-400/10 text-emerald-400";
    case "Pendente":
      return "border-amber-400/30 bg-amber-400/10 text-amber-400";
    case "Férias":
      return "border-sky-400/30 bg-sky-400/10 text-sky-400";
    default:
      return "border-zinc-700 bg-zinc-800/50 text-zinc-400";
  }
}

function StatCard({
  icon: Icon,
  label,
  valor,
  variacao,
}: {
  icon: React.ElementType;
  label: string;
  valor: string;
  variacao: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950 p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-zinc-500">{label}</span>
        <Icon className="h-4 w-4 text-zinc-500" />
      </div>
      <p className="mt-3 text-2xl font-extrabold text-white">{valor}</p>
      <p className="mt-1 text-xs text-zinc-500">{variacao}</p>
    </div>
  );
}

function SectionCard({
  icon: Icon,
  title,
  action,
  children,
}: {
  icon: React.ElementType;
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950 p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-zinc-300">
            <Icon className="h-4 w-4" />
          </div>
          <h2 className="text-base font-bold text-white sm:text-lg">{title}</h2>
        </div>
        {action}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-zinc-500 transition-colors hover:text-white"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-wide text-zinc-500">{label}</span>
      <input
        {...props}
        className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-500"
      />
    </label>
  );
}

export default function AdminDashboardPage() {
  const [admin] = useState(adminInicial);
  const [alunos] = useState(alunosIniciais);
  const [funcionarios, setFuncionarios] = useState(funcionariosIniciais);
  const [config, setConfig] = useState(configInicial);
  const [pagamentos, setPagamentos] = useState(pagamentosIniciais);
  const [atividades] = useState(atividadesIniciais);

  const [buscaAluno, setBuscaAluno] = useState("");
  const [mostrarTodosAlunos, setMostrarTodosAlunos] = useState(false);

  const [modalEquipe, setModalEquipe] = useState(false);
  const [modalConfig, setModalConfig] = useState(false);
  const [modalSenha, setModalSenha] = useState(false);

  const [novoFuncionario, setNovoFuncionario] = useState({
    nome: "",
    cargo: "",
    turno: "Manhã",
  });
  const [configForm, setConfigForm] = useState(config);
  const [senhaForm, setSenhaForm] = useState({ atual: "", nova: "", confirmar: "" });
  const [senhaErro, setSenhaErro] = useState("");

  const alunosFiltrados = useMemo(() => {
    return alunos.filter((a) =>
      a.nome.toLowerCase().includes(buscaAluno.toLowerCase())
    );
  }, [alunos, buscaAluno]);

  const alunosVisiveis = mostrarTodosAlunos
    ? alunosFiltrados
    : alunosFiltrados.slice(0, 5);

  function adicionarFuncionario(e: React.FormEvent) {
    e.preventDefault();
    if (!novoFuncionario.nome || !novoFuncionario.cargo) return;
    setFuncionarios((prev) => [
      ...prev,
      { ...novoFuncionario, status: "Ativo" },
    ]);
    setNovoFuncionario({ nome: "", cargo: "", turno: "Manhã" });
    setModalEquipe(false);
  }

  function marcarComoPago(aluno: string) {
    setPagamentos((prev) =>
      prev.map((p) => (p.aluno === aluno ? { ...p, status: "Pago" } : p))
    );
  }

  function salvarConfig(e: React.FormEvent) {
    e.preventDefault();
    setConfig(configForm);
    setModalConfig(false);
  }

  function alterarSenha(e: React.FormEvent) {
    e.preventDefault();
    if (senhaForm.nova.length < 6) {
      setSenhaErro("A nova senha precisa ter pelo menos 6 caracteres.");
      return;
    }
    if (senhaForm.nova !== senhaForm.confirmar) {
      setSenhaErro("As senhas não coincidem.");
      return;
    }
    setSenhaErro("");
    setSenhaForm({ atual: "", nova: "", confirmar: "" });
    setModalSenha(false);
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-zinc-800/70 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/icon.png" alt="GymFlow" width={32} height={32} priority />
            <span className="text-lg font-bold tracking-wide text-white">
              Gym<span className="text-zinc-400">Flow</span>
            </span>
            <span className="ml-2 rounded-full border border-zinc-700 px-2 py-0.5 text-[11px] font-semibold text-zinc-400">
              Admin
            </span>
          </Link>
          <button className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white">
            <LogOut className="h-4 w-4" />
            Sair
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Cabeçalho do admin */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 ring-1 ring-zinc-800">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-white sm:text-2xl">{admin.nome}</h1>
              <p className="text-sm text-zinc-500">
                {admin.cargo} · {admin.unidade}
              </p>
            </div>
          </div>
          <p className="text-xs text-zinc-600">Último acesso: {admin.ultimoAcesso}</p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Alunos */}
          <SectionCard
            icon={Users}
            title="Alunos"
            action={
              <div className="flex items-center gap-1.5 rounded-lg border border-zinc-800 px-2.5 py-1.5">
                <Search className="h-3.5 w-3.5 text-zinc-500" />
                <input
                  value={buscaAluno}
                  onChange={(e) => setBuscaAluno(e.target.value)}
                  placeholder="Buscar aluno"
                  className="w-28 bg-transparent text-xs text-zinc-300 outline-none placeholder:text-zinc-600 sm:w-36"
                />
              </div>
            }
          >
            <div className="flex flex-col divide-y divide-zinc-900">
              {alunosVisiveis.length === 0 && (
                <p className="py-3 text-sm text-zinc-500">Nenhum aluno encontrado.</p>
              )}
              {alunosVisiveis.map((a) => (
                <div key={a.nome} className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{a.nome}</p>
                    <p className="text-xs text-zinc-500">
                      Plano {a.plano} · desde {a.desde}
                    </p>
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusColor(a.status)}`}
                  >
                    {a.status}
                  </span>
                </div>
              ))}
            </div>
            {alunosFiltrados.length > 5 && (
              <button
                onClick={() => setMostrarTodosAlunos((v) => !v)}
                className="mt-4 w-full rounded-lg border border-zinc-700 py-2 text-sm font-bold text-white transition-colors hover:border-zinc-500"
              >
                {mostrarTodosAlunos ? "Mostrar menos" : "Ver todos os alunos"}
              </button>
            )}
          </SectionCard>

          {/* Funcionários */}
          <SectionCard icon={UserCog} title="Funcionários">
            <div className="flex flex-col divide-y divide-zinc-900">
              {funcionarios.map((f) => (
                <div key={f.nome} className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{f.nome}</p>
                    <p className="text-xs text-zinc-500">
                      {f.cargo} · turno {f.turno}
                    </p>
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusColor(f.status)}`}
                  >
                    {f.status}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setModalEquipe(true)}
              className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg border border-zinc-700 py-2 text-sm font-bold text-white transition-colors hover:border-zinc-500"
            >
              <Plus className="h-4 w-4" />
              Adicionar funcionário
            </button>
          </SectionCard>

          {/* Configurações da academia */}
          <SectionCard icon={Settings} title="Configurações da academia">
            <div className="flex flex-col divide-y divide-zinc-900">
              {Object.entries({
                Unidade: config.unidade,
                Endereço: config.endereco,
                Horário: config.horario,
                Capacidade: config.capacidadeMaxima,
              }).map(([label, value]) => (
                <div key={label} className="flex items-center justify-between py-2.5">
                  <span className="text-xs uppercase tracking-wide text-zinc-500">{label}</span>
                  <span className="text-sm font-medium text-zinc-200">{value}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                setConfigForm(config);
                setModalConfig(true);
              }}
              className="mt-4 w-full rounded-lg border border-zinc-700 py-2 text-sm font-bold text-white transition-colors hover:border-zinc-500"
            >
              Editar configurações
            </button>
          </SectionCard>

          {/* Conta do admin */}
          <SectionCard icon={Mail} title="Conta do administrador">
            <div className="flex flex-col divide-y divide-zinc-900">
              <div className="flex items-center justify-between py-2.5">
                <span className="text-xs uppercase tracking-wide text-zinc-500">E-mail</span>
                <span className="text-sm font-medium text-zinc-200">{admin.email}</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-xs uppercase tracking-wide text-zinc-500">Cargo</span>
                <span className="text-sm font-medium text-zinc-200">{admin.cargo}</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-xs uppercase tracking-wide text-zinc-500">Último acesso</span>
                <span className="text-sm font-medium text-zinc-200">{admin.ultimoAcesso}</span>
              </div>
            </div>
            <button
              onClick={() => setModalSenha(true)}
              className="mt-4 w-full rounded-lg border border-zinc-700 py-2 text-sm font-bold text-white transition-colors hover:border-zinc-500"
            >
              Alterar senha
            </button>
          </SectionCard>
        </div>

        {/* Financeiro */}
        <div className="mt-6">
          <SectionCard
            icon={Wallet}
            title="Financeiro"
            action={
              <button className="flex items-center gap-1.5 rounded-lg border border-zinc-800 px-2.5 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white">
                <Download className="h-3.5 w-3.5" />
                Exportar relatório
              </button>
            }
          >
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Gráfico de receita */}
              <div className="lg:col-span-2">
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  Receita nos últimos 6 meses
                </p>
                <div className="mt-3 h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={receitaPorMes}>
                      <XAxis
                        dataKey="mes"
                        stroke="#71717a"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#71717a"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(v) => `${v / 1000}k`}
                      />
                      <Tooltip
                        cursor={{ fill: "rgba(255,255,255,0.04)" }}
                        contentStyle={{
                          background: "#18181b",
                          border: "1px solid #27272a",
                          borderRadius: 8,
                          fontSize: 12,
                          color: "#e4e4e7",
                        }}
                        formatter={(value) => [
                          `R$ ${Number(value).toLocaleString("pt-BR")}`,
                          "Receita",
                        ]}
                      />
                      <Bar dataKey="valor" fill="#a1a1aa" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                  <p className="text-sm text-zinc-400">
                    {pagamentos.filter((p) => p.status === "Atrasado").length}{" "}
                    pagamentos atrasados este mês
                  </p>
                </div>
                <div className="mt-3 flex flex-col divide-y divide-zinc-900">
                  {pagamentos.map((p) => (
                    <div
                      key={p.aluno}
                      className="flex items-center justify-between py-2.5"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">{p.aluno}</p>
                        <p className="text-xs text-zinc-500">
                          {p.valor} · vencimento {p.data}
                        </p>
                      </div>
                      {p.status === "Atrasado" ? (
                        <button
                          onClick={() => marcarComoPago(p.aluno)}
                          className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-xs font-semibold text-amber-400 transition-colors hover:bg-amber-400/20"
                        >
                          Marcar como pago
                        </button>
                      ) : (
                        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                          Pago
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Receita por plano */}
              <div>
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  Receita por plano
                </p>
                <div className="mt-3 flex flex-col gap-4">
                  {receitaPorPlano.map((r) => (
                    <div key={r.plano}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-zinc-200">{r.plano}</span>
                        <span className="text-zinc-500">
                          R$ {r.valor.toLocaleString("pt-BR")}
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-zinc-900">
                        <div
                          className="h-full rounded-full bg-zinc-400"
                          style={{ width: `${r.porcentagem}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-lg border border-zinc-900 bg-zinc-900/40 p-3">
                  <TrendingUp className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <p className="text-xs text-zinc-400">
                    Receita cresceu 6,4% em relação ao mês anterior.
                  </p>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        {/* Atividades recentes */}
        <div className="mt-6">
          <SectionCard icon={History} title="Atividades recentes">
            <ul className="flex flex-col divide-y divide-zinc-900">
              {atividades.map((a, i) => (
                <li key={i} className="flex items-start gap-3 py-3">
                  <Bell className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-600" />
                  <div>
                    <p className="text-sm text-zinc-200">{a.texto}</p>
                    <p className="text-xs text-zinc-600">{a.tempo}</p>
                  </div>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>

      {/* Modal: adicionar funcionário */}
      <Modal open={modalEquipe} onClose={() => setModalEquipe(false)} title="Adicionar funcionário">
        <form onSubmit={adicionarFuncionario} className="flex flex-col gap-4">
          <Field
            label="Nome"
            value={novoFuncionario.nome}
            onChange={(e) =>
              setNovoFuncionario((p) => ({ ...p, nome: e.target.value }))
            }
            placeholder="Nome completo"
          />
          <Field
            label="Cargo"
            value={novoFuncionario.cargo}
            onChange={(e) =>
              setNovoFuncionario((p) => ({ ...p, cargo: e.target.value }))
            }
            placeholder="Ex.: Instrutor de musculação"
          />
          <label className="flex flex-col gap-1.5">
            <span className="text-xs uppercase tracking-wide text-zinc-500">Turno</span>
            <select
              value={novoFuncionario.turno}
              onChange={(e) =>
                setNovoFuncionario((p) => ({ ...p, turno: e.target.value }))
              }
              className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-500"
            >
              <option>Manhã</option>
              <option>Tarde</option>
              <option>Noite</option>
            </select>
          </label>
          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-white py-2.5 text-sm font-bold text-black transition-colors hover:bg-zinc-200"
          >
            Adicionar
          </button>
        </form>
      </Modal>

      {/* Modal: editar configurações */}
      <Modal open={modalConfig} onClose={() => setModalConfig(false)} title="Editar configurações da academia">
        <form onSubmit={salvarConfig} className="flex flex-col gap-4">
          <Field
            label="Unidade"
            value={configForm.unidade}
            onChange={(e) => setConfigForm((p) => ({ ...p, unidade: e.target.value }))}
          />
          <Field
            label="Endereço"
            value={configForm.endereco}
            onChange={(e) => setConfigForm((p) => ({ ...p, endereco: e.target.value }))}
          />
          <Field
            label="Horário"
            value={configForm.horario}
            onChange={(e) => setConfigForm((p) => ({ ...p, horario: e.target.value }))}
          />
          <Field
            label="Capacidade"
            value={configForm.capacidadeMaxima}
            onChange={(e) =>
              setConfigForm((p) => ({ ...p, capacidadeMaxima: e.target.value }))
            }
          />
          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-white py-2.5 text-sm font-bold text-black transition-colors hover:bg-zinc-200"
          >
            Salvar alterações
          </button>
        </form>
      </Modal>

      {/* Modal: alterar senha */}
      <Modal
        open={modalSenha}
        onClose={() => {
          setModalSenha(false);
          setSenhaErro("");
        }}
        title="Alterar senha"
      >
        <form onSubmit={alterarSenha} className="flex flex-col gap-4">
          <Field
            label="Senha atual"
            type="password"
            value={senhaForm.atual}
            onChange={(e) => setSenhaForm((p) => ({ ...p, atual: e.target.value }))}
            required
          />
          <Field
            label="Nova senha"
            type="password"
            value={senhaForm.nova}
            onChange={(e) => setSenhaForm((p) => ({ ...p, nova: e.target.value }))}
            required
          />
          <Field
            label="Confirmar nova senha"
            type="password"
            value={senhaForm.confirmar}
            onChange={(e) => setSenhaForm((p) => ({ ...p, confirmar: e.target.value }))}
            required
          />
          {senhaErro && <p className="text-xs text-red-400">{senhaErro}</p>}
          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-white py-2.5 text-sm font-bold text-black transition-colors hover:bg-zinc-200"
          >
            Salvar nova senha
          </button>
        </form>
      </Modal>
    </div>
  );
}