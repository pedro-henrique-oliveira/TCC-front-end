"use client";

import { useEffect, useMemo, useState } from "react";
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

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

/* =========================
   TIPOS
========================= */

interface Aluno {
  id: number;
  nome: string;
  email?: string;
  idade?: number;
  cpf?: string | number;
  dataNascimento?: string;
  plano?: string;
  status?: string;
  createdAt?: string;
}

interface Funcionario {
  id: number;
  nome: string;
  cargo?: string;
  turno?: string;
  status?: string;
  email?: string;
}

interface Receita {
  id: number;
  pagamento?: string;
  dataPagamento?: string;
  valorPagamento?: string | number;
  status?: string;
  formaPagamento?: string;
  createdAt?: string;
}

interface Configuracao {
  unidade: string;
  endereco: string;
  horario: string;
  capacidadeMaxima: string;
}

/* =========================
   HELPERS
========================= */

function normalizarLista<T>(response: any): T[] {
  if (Array.isArray(response)) {
    return response;
  }

  if (Array.isArray(response?.data)) {
    return response.data;
  }

  if (Array.isArray(response?.result)) {
    return response.result;
  }

  return [];
}

function formatarData(data?: string) {
  if (!data) return "-";

  const date = new Date(data);

  if (Number.isNaN(date.getTime())) {
    return data;
  }

  return date.toLocaleDateString("pt-BR");
}

function formatarMoeda(valor?: string | number) {
  if (valor === undefined || valor === null || valor === "") {
    return "R$ 0,00";
  }

  const numero =
    typeof valor === "number"
      ? valor
      : Number(String(valor).replace(",", "."));

  if (Number.isNaN(numero)) {
    return `R$ ${valor}`;
  }

  return numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function numero(valor?: string | number) {
  if (typeof valor === "number") return valor;
  if (!valor) return 0;
  let str = String(valor).replace("R$", "").trim();
  // Se contiver vírgula (ex: "3.500,00" ou "3500,00")
  if (str.includes(",")) {
    str = str.replace(/./g, "").replace(",", ".");
  }
  const convertido = Number(str);
  return Number.isNaN(convertido) ? 0 : convertido;
}

function statusColor(status: string) {
  switch (status?.toLowerCase()) {
    case "ativo":
      return "border-emerald-400/30 bg-emerald-400/10 text-emerald-400";

    case "pago":
      return "border-emerald-400/30 bg-emerald-400/10 text-emerald-400";

    case "pendente":
      return "border-amber-400/30 bg-amber-400/10 text-amber-400";

    case "atrasado":
      return "border-amber-400/30 bg-amber-400/10 text-amber-400";

    case "férias":
      return "border-sky-400/30 bg-sky-400/10 text-sky-400";

    case "inativo":
      return "border-red-400/30 bg-red-400/10 text-red-400";

    default:
      return "border-zinc-700 bg-zinc-800/50 text-zinc-400";
  }
}

/* =========================
   COMPONENTES
========================= */

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
        <span className="text-xs uppercase tracking-wide text-zinc-500">
          {label}
        </span>

        <Icon className="h-4 w-4 text-zinc-500" />
      </div>

      <p className="mt-3 text-2xl font-extrabold text-white">
        {valor}
      </p>

      <p className="mt-1 text-xs text-zinc-500">
        {variacao}
      </p>
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

          <h2 className="text-base font-bold text-white sm:text-lg">
            {title}
          </h2>
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
          <h3 className="text-base font-bold text-white">
            {title}
          </h3>

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
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-wide text-zinc-500">
        {label}
      </span>

      <input
        {...props}
        className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 outline-none focus:border-zinc-500"
      />
    </label>
  );
}

/* =========================
   DASHBOARD
========================= */

export default function AdminDashboardPage() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [receitas, setReceitas] = useState<Receita[]>([]);

  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const [config, setConfig] = useState<Configuracao>({
    unidade: "GymFlow",
    endereco: "Não cadastrado",
    horario: "Não cadastrado",
    capacidadeMaxima: "Não cadastrada",
  });

  const [buscaAluno, setBuscaAluno] = useState("");
  const [mostrarTodosAlunos, setMostrarTodosAlunos] =
    useState(false);

  const [modalEquipe, setModalEquipe] = useState(false);
  const [modalConfig, setModalConfig] = useState(false);
  const [modalSenha, setModalSenha] = useState(false);

  const [novoFuncionario, setNovoFuncionario] = useState({
    nome: "",
    cargo: "",
    turno: "Manhã",
  });

  const [configForm, setConfigForm] = useState(config);

  const [senhaForm, setSenhaForm] = useState({
    atual: "",
    nova: "",
    confirmar: "",
  });

  const [senhaErro, setSenhaErro] = useState("");

  /* =========================
     BUSCAR DADOS DA API
  ========================= */

 async function carregarDados() {
  try {
    setErro("");

    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const [alunosResponse, funcionariosResponse, receitasResponse] =
      await Promise.all([
        fetch(`${API_URL}/alunos`, {
          method: "GET",
          headers,
          cache: "no-store",
        }),

        fetch(`${API_URL}/funcionarios`, {
          method: "GET",
          headers,
          cache: "no-store",
        }),

        fetch(`${API_URL}/receitas`, {
          method: "GET",
          headers,
          cache: "no-store",
        }),
      ]);

    // Token inválido ou expirado
    if (
      alunosResponse.status === 401 ||
      funcionariosResponse.status === 401 ||
      receitasResponse.status === 401
    ) {
      localStorage.removeItem("token");
      window.location.href = "/login";
      return;
    }

    if (!alunosResponse.ok) {
      throw new Error(
        `Erro ao buscar alunos: ${alunosResponse.status}`
      );
    }

    if (!funcionariosResponse.ok) {
      throw new Error(
        `Erro ao buscar funcionários: ${funcionariosResponse.status}`
      );
    }

    if (!receitasResponse.ok) {
      throw new Error(
        `Erro ao buscar receitas: ${receitasResponse.status}`
      );
    }

    const alunosData = await alunosResponse.json();
    const funcionariosData = await funcionariosResponse.json();
    const receitasData = await receitasResponse.json();

    setAlunos(normalizarLista<Aluno>(alunosData));
    setFuncionarios(
      normalizarLista<Funcionario>(funcionariosData)
    );
    setReceitas(
      normalizarLista<Receita>(receitasData)
    );
  } catch (error) {
    console.error(error);

    setErro(
      error instanceof Error
        ? error.message
        : "Erro ao carregar dados da API."
    );
  } finally {
    setLoading(false);
  }
} 
  /* =========================
     CARREGAMENTO AUTOMÁTICO
  ========================= */

  useEffect(() => {
    carregarDados();

    const intervalo = setInterval(() => {
      carregarDados();
    }, 30000);

    return () => clearInterval(intervalo);
  }, []);

  /* =========================
     ALUNOS
  ========================= */

  const alunosFiltrados = useMemo(() => {
    return alunos.filter((aluno) =>
      aluno.nome
        ?.toLowerCase()
        .includes(buscaAluno.toLowerCase())
    );
  }, [alunos, buscaAluno]);

  const alunosVisiveis = mostrarTodosAlunos
    ? alunosFiltrados
    : alunosFiltrados.slice(0, 5);

  /* =========================
     RECEITAS
  ========================= */

  const receitasPagas = useMemo(() => {
    return receitas.filter(
      (receita) =>
        receita.status?.toLowerCase() === "pago"
    );
  }, [receitas]);

  const receitasAtrasadas = useMemo(() => {
    return receitas.filter(
      (receita) =>
        receita.status?.toLowerCase() === "atrasado"
    );
  }, [receitas]);

  const receitaTotal = useMemo(() => {
    return receitasPagas.reduce(
      (total, receita) =>
        total + numero(receita.valorPagamento),
      0
    );
  }, [receitasPagas]);

  /* =========================
     RECEITA POR MÊS
  ========================= */

  const receitaPorMes = useMemo(() => {
    const meses = new Map<
      string,
      { mes: string; valor: number }
    >();

    receitasPagas.forEach((receita) => {
      if (!receita.dataPagamento) return;

      const data = new Date(receita.dataPagamento);

      if (Number.isNaN(data.getTime())) return;

      const chave = `${data.getFullYear()}-${data.getMonth()}`;

      const mes = data.toLocaleDateString("pt-BR", {
        month: "short",
      });

      const valorAtual = meses.get(chave)?.valor || 0;

      meses.set(chave, {
        mes: mes.replace(".", ""),
        valor:
          valorAtual + numero(receita.valorPagamento),
      });
    });

    return Array.from(meses.values()).slice(-6);
  }, [receitasPagas]);

  /* =========================
     RECEITA POR PLANO
  ========================= */

  const receitaPorPlano = useMemo(() => {
    const planos = new Map<string, number>();

    receitasPagas.forEach((receita) => {
      const pagamento = receita.pagamento || "Outros";

      const valorAtual = planos.get(pagamento) || 0;

      planos.set(
        pagamento,
        valorAtual + numero(receita.valorPagamento)
      );
    });

    const total = Array.from(planos.values()).reduce(
      (acc, valor) => acc + valor,
      0
    );

    return Array.from(planos.entries()).map(
      ([plano, valor]) => ({
        plano,
        valor,
        porcentagem:
          total > 0
            ? Math.round((valor / total) * 100)
            : 0,
      })
    );
  }, [receitasPagas]);

  /* =========================
     ADICIONAR FUNCIONÁRIO
  ========================= */

  async function adicionarFuncionario(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (
      !novoFuncionario.nome ||
      !novoFuncionario.cargo
    ) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/funcionarios`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: novoFuncionario.nome,
            cargo: novoFuncionario.cargo,
            turno: novoFuncionario.turno,
            status: "Ativo",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Erro ao cadastrar funcionário: ${response.status}`
        );
      }

      await carregarDados();

      setNovoFuncionario({
        nome: "",
        cargo: "",
        turno: "Manhã",
      });

      setModalEquipe(false);
    } catch (error) {
      console.error(error);

      setErro(
        error instanceof Error
          ? error.message
          : "Erro ao cadastrar funcionário."
      );
    }
  }

  /* =========================
     MARCAR RECEITA COMO PAGA
  ========================= */

  async function marcarComoPago(id: number) {
    try {
      const response = await fetch(
        `${API_URL}/receitas/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "Pago",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Erro ao atualizar pagamento: ${response.status}`
        );
      }

      await carregarDados();
    } catch (error) {
      console.error(error);

      setErro(
        error instanceof Error
          ? error.message
          : "Erro ao atualizar pagamento."
      );
    }
  }

  /* =========================
     CONFIGURAÇÃO
  ========================= */

  function salvarConfig(e: React.FormEvent) {
    e.preventDefault();

    setConfig(configForm);
    setModalConfig(false);
  }

  /* =========================
     SENHA
  ========================= */

  function alterarSenha(e: React.FormEvent) {
    e.preventDefault();

    if (senhaForm.nova.length < 6) {
      setSenhaErro(
        "A nova senha precisa ter pelo menos 6 caracteres."
      );
      return;
    }

    if (
      senhaForm.nova !== senhaForm.confirmar
    ) {
      setSenhaErro(
        "As senhas não coincidem."
      );
      return;
    }

    setSenhaErro("");

    setSenhaForm({
      atual: "",
      nova: "",
      confirmar: "",
    });

    setModalSenha(false);
  }

  /* =========================
     STATS REAIS
  ========================= */

  const stats = [
    {
      label: "Alunos ativos",
      valor: String(
        alunos.filter(
          (aluno) =>
            aluno.status?.toLowerCase() ===
            "ativo"
        ).length || alunos.length
      ),
      variacao: `${alunos.length} cadastrados`,
      icon: Users,
    },

    {
      label: "Funcionários",
      valor: String(funcionarios.length),
      variacao: "Dados da API",
      icon: UserCog,
    },

    {
      label: "Receita total",
      valor: formatarMoeda(receitaTotal),
      variacao: `${receitasPagas.length} pagamentos pagos`,
      icon: Wallet,
    },

    {
      label: "Pagamentos atrasados",
      valor: String(receitasAtrasadas.length),
      variacao: "Dados atualizados da API",
      icon: Activity,
    },
  ];

  /* =========================
     RENDER
  ========================= */

  return (
    <div className="min-h-screen bg-black">
      {/* HEADER */}

      <header className="border-b border-zinc-800/70 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/Hero"
            className="flex items-center gap-2"
          >
            <Image
              src="/icon.png"
              alt="GymFlow"
              width={32}
              height={32}
              priority
            />

            <span className="text-lg font-bold tracking-wide text-white">
              Gym<span className="text-zinc-400">
                Flow
              </span>
            </span>

            <span className="ml-2 rounded-full border border-zinc-700 px-2 py-0.5 text-[11px] font-semibold text-zinc-400">
              Admin
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* ERRO */}

        {erro && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
            {erro}
          </div>
        )}

        {/* CABEÇALHO */}

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 ring-1 ring-zinc-800">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <div>
              <h1 className="text-xl font-extrabold text-white sm:text-2xl">
                Administrador
              </h1>

              <p className="text-sm text-zinc-500">
                Painel administrativo · GymFlow
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-xs text-zinc-600">
              Atualização automática: 30s
            </p>

            {loading && (
              <span className="text-xs text-zinc-500">
                Atualizando...
              </span>
            )}
          </div>
        </div>

        {/* STATS */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              {...stat}
            />
          ))}
        </div>

        {/* CONTEÚDO */}

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* ALUNOS */}

          <SectionCard
            icon={Users}
            title="Alunos"
            action={
              <div className="flex items-center gap-1.5 rounded-lg border border-zinc-800 px-2.5 py-1.5">
                <Search className="h-3.5 w-3.5 text-zinc-500" />

                <input
                  value={buscaAluno}
                  onChange={(e) =>
                    setBuscaAluno(e.target.value)
                  }
                  placeholder="Buscar aluno"
                  className="w-28 bg-transparent text-xs text-zinc-300 outline-none placeholder:text-zinc-600 sm:w-36"
                />
              </div>
            }
          >
            <div className="flex flex-col divide-y divide-zinc-900">
              {alunosVisiveis.length === 0 && (
                <p className="py-3 text-sm text-zinc-500">
                  {loading
                    ? "Carregando alunos..."
                    : "Nenhum aluno encontrado."}
                </p>
              )}

              {alunosVisiveis.map((aluno) => (
                <div
                  key={aluno.id}
                  className="flex items-center justify-between py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {aluno.nome}
                    </p>

                    <p className="text-xs text-zinc-500">
                      Plano{" "}
                      {aluno.plano || "Não informado"}{" "}
                      · desde{" "}
                      {formatarData(
                        aluno.createdAt
                      )}
                    </p>
                  </div>

                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusColor(
                      aluno.status || "Ativo"
                    )}`}
                  >
                    {aluno.status || "Ativo"}
                  </span>
                </div>
              ))}
            </div>

            {alunosFiltrados.length > 5 && (
              <button
                onClick={() =>
                  setMostrarTodosAlunos(
                    (valor) => !valor
                  )
                }
                className="mt-4 w-full rounded-lg border border-zinc-700 py-2 text-sm font-bold text-white transition-colors hover:border-zinc-500"
              >
                {mostrarTodosAlunos
                  ? "Mostrar menos"
                  : "Ver todos os alunos"}
              </button>
            )}
          </SectionCard>

          {/* FUNCIONÁRIOS */}

          <SectionCard
            icon={UserCog}
            title="Funcionários"
          >
            <div className="flex flex-col divide-y divide-zinc-900">
              {funcionarios.length === 0 && (
                <p className="py-3 text-sm text-zinc-500">
                  {loading
                    ? "Carregando funcionários..."
                    : "Nenhum funcionário cadastrado."}
                </p>
              )}

              {funcionarios.map((funcionario) => (
                <div
                  key={funcionario.id}
                  className="flex items-center justify-between py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {funcionario.nome}
                    </p>

                    <p className="text-xs text-zinc-500">
                      {funcionario.cargo ||
                        "Cargo não informado"}{" "}
                      · turno{" "}
                      {funcionario.turno ||
                        "Não informado"}
                    </p>
                  </div>

                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusColor(
                      funcionario.status ||
                        "Ativo"
                    )}`}
                  >
                    {funcionario.status ||
                      "Ativo"}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                setModalEquipe(true)
              }
              className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg border border-zinc-700 py-2 text-sm font-bold text-white transition-colors hover:border-zinc-500"
            >
              <Plus className="h-4 w-4" />
              Adicionar funcionário
            </button>
          </SectionCard>

          {/* CONFIGURAÇÕES */}

          <SectionCard
            icon={Settings}
            title="Configurações da academia"
          >
            <div className="flex flex-col divide-y divide-zinc-900">
              {Object.entries({
                Unidade: config.unidade,
                Endereço: config.endereco,
                Horário: config.horario,
                Capacidade:
                  config.capacidadeMaxima,
              }).map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-2.5"
                >
                  <span className="text-xs uppercase tracking-wide text-zinc-500">
                    {label}
                  </span>

                  <span className="text-sm font-medium text-zinc-200">
                    {value}
                  </span>
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

          {/* CONTA */}

          <SectionCard
            icon={Mail}
            title="Conta do administrador"
          >
            <div className="flex flex-col divide-y divide-zinc-900">
              <div className="flex items-center justify-between py-2.5">
                <span className="text-xs uppercase tracking-wide text-zinc-500">
                  API
                </span>

                <span className="text-sm font-medium text-zinc-200">
                  Conectada
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <span className="text-xs uppercase tracking-wide text-zinc-500">
                  Backend
                </span>

                <span className="text-sm font-medium text-zinc-200">
                  {API_URL}
                </span>
              </div>

              <div className="flex items-center justify-between py-2.5">
                <span className="text-xs uppercase tracking-wide text-zinc-500">
                  Atualização
                </span>

                <span className="text-sm font-medium text-emerald-400">
                  Automática
                </span>
              </div>
            </div>

            <button
              onClick={() =>
                setModalSenha(true)
              }
              className="mt-4 w-full rounded-lg border border-zinc-700 py-2 text-sm font-bold text-white transition-colors hover:border-zinc-500"
            >
              Alterar senha
            </button>
          </SectionCard>
        </div>

        {/* FINANCEIRO */}

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
              {/* GRÁFICO */}

              <div className="lg:col-span-2">
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  Receita nos últimos meses
                </p>

                <div className="mt-3 h-56">
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <BarChart
                      data={receitaPorMes}
                    >
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
                        tickFormatter={(value) =>
                          `${value / 1000}k`
                        }
                      />

                      <Tooltip
                        cursor={{
                          fill: "rgba(255,255,255,0.04)",
                        }}
                        contentStyle={{
                          background: "#18181b",
                          border:
                            "1px solid #27272a",
                          borderRadius: 8,
                          fontSize: 12,
                          color: "#e4e4e7",
                        }}
                        formatter={(value) => [
                          formatarMoeda(
                            Number(value)
                          ),
                          "Receita",
                        ]}
                      />

                      <Bar
                        dataKey="valor"
                        fill="#a1a1aa"
                        radius={[
                          4,
                          4,
                          0,
                          0,
                        ]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* ATRASADOS */}

                <div className="mt-6 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />

                  <p className="text-sm text-zinc-400">
                    {receitasAtrasadas.length}{" "}
                    pagamentos atrasados
                  </p>
                </div>

                {/* PAGAMENTOS */}

                <div className="mt-3 flex flex-col divide-y divide-zinc-900">
                  {receitas.length === 0 && (
                    <p className="py-3 text-sm text-zinc-500">
                      Nenhuma receita cadastrada.
                    </p>
                  )}

                  {receitas.map((receita) => (
                    <div
                      key={receita.id}
                      className="flex items-center justify-between py-2.5"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {receita.pagamento ||
                            "Pagamento"}
                        </p>

                        <p className="text-xs text-zinc-500">
                          {formatarMoeda(
                            receita.valorPagamento
                          )}{" "}
                          · pagamento{" "}
                          {formatarData(
                            receita.dataPagamento
                          )}
                        </p>
                      </div>

                      {receita.status?.toLowerCase() ===
                      "atrasado" ? (
                        <button
                          onClick={() =>
                            marcarComoPago(
                              receita.id
                            )
                          }
                          className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-xs font-semibold text-amber-400 transition-colors hover:bg-amber-400/20"
                        >
                          Marcar como pago
                        </button>
                      ) : (
                        <span
                          className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${statusColor(
                            receita.status ||
                              ""
                          )}`}
                        >
                          {receita.status ||
                            "Sem status"}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* RECEITA POR PLANO */}

              <div>
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  Receita por plano
                </p>

                <div className="mt-3 flex flex-col gap-4">
                  {receitaPorPlano.length === 0 && (
                    <p className="text-sm text-zinc-500">
                      Sem dados de receita.
                    </p>
                  )}

                  {receitaPorPlano.map((receita) => (
                    <div key={receita.plano}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-zinc-200">
                          {receita.plano}
                        </span>

                        <span className="text-zinc-500">
                          {formatarMoeda(
                            receita.valor
                          )}
                        </span>
                      </div>

                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-zinc-900">
                        <div
                          className="h-full rounded-full bg-zinc-400"
                          style={{
                            width: `${receita.porcentagem}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-lg border border-zinc-900 bg-zinc-900/40 p-3">
                  <TrendingUp className="h-4 w-4 flex-shrink-0 text-emerald-400" />

                  <p className="text-xs text-zinc-400">
                    Dados calculados diretamente das
                    receitas retornadas pelo banco.
                  </p>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        {/* ATUALIZAÇÃO */}

        <div className="mt-6">
          <SectionCard
            icon={History}
            title="Status da conexão"
          >
            <div className="flex items-center justify-between rounded-lg border border-zinc-900 bg-zinc-900/30 p-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Banco de dados
                </p>

                <p className="text-xs text-zinc-500">
                  Os dados são buscados pela API
                  automaticamente.
                </p>
              </div>

              <button
                onClick={carregarDados}
                className="rounded-lg border border-zinc-700 px-4 py-2 text-xs font-bold text-white hover:border-zinc-500"
              >
                Atualizar agora
              </button>
            </div>
          </SectionCard>
        </div>
      </div>

      {/* MODAL FUNCIONÁRIO */}

      <Modal
        open={modalEquipe}
        onClose={() =>
          setModalEquipe(false)
        }
        title="Adicionar funcionário"
      >
        <form
          onSubmit={adicionarFuncionario}
          className="flex flex-col gap-4"
        >
          <Field
            label="Nome"
            value={novoFuncionario.nome}
            onChange={(e) =>
              setNovoFuncionario((prev) => ({
                ...prev,
                nome: e.target.value,
              }))
            }
            placeholder="Nome completo"
          />

          <Field
            label="Cargo"
            value={novoFuncionario.cargo}
            onChange={(e) =>
              setNovoFuncionario((prev) => ({
                ...prev,
                cargo: e.target.value,
              }))
            }
            placeholder="Ex.: Instrutor de musculação"
          />

          <label className="flex flex-col gap-1.5">
            <span className="text-xs uppercase tracking-wide text-zinc-500">
              Turno
            </span>

            <select
              value={novoFuncionario.turno}
              onChange={(e) =>
                setNovoFuncionario((prev) => ({
                  ...prev,
                  turno: e.target.value,
                }))
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

      {/* MODAL CONFIG */}

      <Modal
        open={modalConfig}
        onClose={() =>
          setModalConfig(false)
        }
        title="Editar configurações da academia"
      >
        <form
          onSubmit={salvarConfig}
          className="flex flex-col gap-4"
        >
          <Field
            label="Unidade"
            value={configForm.unidade}
            onChange={(e) =>
              setConfigForm((prev) => ({
                ...prev,
                unidade: e.target.value,
              }))
            }
          />

          <Field
            label="Endereço"
            value={configForm.endereco}
            onChange={(e) =>
              setConfigForm((prev) => ({
                ...prev,
                endereco: e.target.value,
              }))
            }
          />

          <Field
            label="Horário"
            value={configForm.horario}
            onChange={(e) =>
              setConfigForm((prev) => ({
                ...prev,
                horario: e.target.value,
              }))
            }
          />

          <Field
            label="Capacidade"
            value={configForm.capacidadeMaxima}
            onChange={(e) =>
              setConfigForm((prev) => ({
                ...prev,
                capacidadeMaxima:
                  e.target.value,
              }))
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

      {/* MODAL SENHA */}

      <Modal
        open={modalSenha}
        onClose={() => {
          setModalSenha(false);
          setSenhaErro("");
        }}
        title="Alterar senha"
      >
        <form
          onSubmit={alterarSenha}
          className="flex flex-col gap-4"
        >
          <Field
            label="Senha atual"
            type="password"
            value={senhaForm.atual}
            onChange={(e) =>
              setSenhaForm((prev) => ({
                ...prev,
                atual: e.target.value,
              }))
            }
            required
          />

          <Field
            label="Nova senha"
            type="password"
            value={senhaForm.nova}
            onChange={(e) =>
              setSenhaForm((prev) => ({
                ...prev,
                nova: e.target.value,
              }))
            }
            required
          />

          <Field
            label="Confirmar nova senha"
            type="password"
            value={senhaForm.confirmar}
            onChange={(e) =>
              setSenhaForm((prev) => ({
                ...prev,
                confirmar: e.target.value,
              }))
            }
            required
          />

          {senhaErro && (
            <p className="text-xs text-red-400">
              {senhaErro}
            </p>
          )}

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