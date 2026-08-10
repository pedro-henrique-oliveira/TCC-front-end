"use server";

import type {
  Aluno,
  Funcionario,
  Receita,
  Treino,
  ConfigAcademia,
  Admin,
  Stats
} from "../interface/adm";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

async function fetchWithAuth(
  endpoint: string,
  options: RequestInit = {}
) {
  const token = process.env.AUTH_TOKEN; // Defina seu token nos env vars

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Alunos
export async function buscarAlunos(): Promise<Aluno[]> {
  try {
    const data = await fetchWithAuth("/alunos");
    return data;
  } catch (error) {
    console.error("Erro ao buscar alunos:", error);
    return [];
  }
}

export async function buscarAlunosPorPlano(plano: string): Promise<Aluno[]> {
  try {
    const data = await fetchWithAuth(`/alunos?plano=${plano}`);
    return data;
  } catch (error) {
    console.error("Erro ao buscar alunos por plano:", error);
    return [];
  }
}

export async function adicionarAluno(aluno: Omit<Aluno, "id" | "createdAt" | "updatedAt">): Promise<Aluno | null> {
  try {
    const data = await fetchWithAuth("/alunos", {
      method: "POST",
      body: JSON.stringify(aluno),
    });
    return data;
  } catch (error) {
    console.error("Erro ao adicionar aluno:", error);
    return null;
  }
}

// Funcionários
export async function buscarFuncionarios(): Promise<Funcionario[]> {
  try {
    const data = await fetchWithAuth("/funcionarios");
    return data;
  } catch (error) {
    console.error("Erro ao buscar funcionários:", error);
    return [];
  }
}

export async function adicionarFuncionario(
  funcionario: Omit<Funcionario, "id" | "createdAt" | "updatedAt">
): Promise<Funcionario | null> {
  try {
    const data = await fetchWithAuth("/funcionarios", {
      method: "POST",
      body: JSON.stringify(funcionario),
    });
    return data;
  } catch (error) {
    console.error("Erro ao adicionar funcionário:", error);
    return null;
  }
}

// Receitas / Pagamentos
export async function buscarPagamentos(): Promise<Receita[]> {
  try {
    const data = await fetchWithAuth("/receitas");
    return data;
  } catch (error) {
    console.error("Erro ao buscar pagamentos:", error);
    return [];
  }
}

export async function marcarPagamentoComoPago(id: number): Promise<Receita | null> {
  try {
    const data = await fetchWithAuth(`/receitas/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: "Pago" }),
    });
    return data;
  } catch (error) {
    console.error("Erro ao marcar pagamento como pago:", error);
    return null;
  }
}

// Configurações da Academia
export async function buscarConfiguracoes(): Promise<ConfigAcademia | null> {
  try {
    const data = await fetchWithAuth("/configuracoes");
    return data;
  } catch (error) {
    console.error("Erro ao buscar configurações:", error);
    return null;
  }
}

export async function atualizarConfiguracoes(
  config: Partial<ConfigAcademia>
): Promise<ConfigAcademia | null> {
  try {
    const data = await fetchWithAuth("/configuracoes", {
      method: "PATCH",
      body: JSON.stringify(config),
    });
    return data;
  } catch (error) {
    console.error("Erro ao atualizar configurações:", error);
    return null;
  }
}

// Admin
export async function buscarDadosAdmin(adminId: number): Promise<Admin | null> {
  try {
    const data = await fetchWithAuth(`/admin/${adminId}`);
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados do admin:", error);
    return null;
  }
}

export async function alterarSenhaAdmin(
  adminId: number,
  senhaAtual: string,
  novaSenha: string
): Promise<boolean> {
  try {
    await fetchWithAuth(`/admin/${adminId}/senha`, {
      method: "PATCH",
      body: JSON.stringify({
        senhaAtual,
        novaSenha,
      }),
    });
    return true;
  } catch (error) {
    console.error("Erro ao alterar senha:", error);
    return false;
  }
}

// Stats
export async function buscarStats(): Promise<Stats | null> {
  try {
    const [alunos, funcionarios, receitas, pagamentos] = await Promise.all([
      buscarAlunos(),
      buscarFuncionarios(),
      buscarPagamentos(),
      buscarPagamentos(),
    ]);

    const receitaMensal = receitas
      .filter((r) => {
        const dataAtual = new Date();
        const dataPagamento = new Date(r.dataPagamento);
        return (
          dataPagamento.getMonth() === dataAtual.getMonth() &&
          dataPagamento.getFullYear() === dataAtual.getFullYear()
        );
      })
      .reduce((acc, r) => {
        const valor = parseFloat(r.valorPagamento.replace("R$ ", "").replace(",", "."));
        return acc + valor;
      }, 0);

    const pagamentosAtrasados = pagamentos.filter((p) => p.status === "Atrasado").length;

    return {
      alunosAtivos: alunos.length,
      funcionarios: funcionarios.length,
      receitaMensal: `R$ ${receitaMensal.toFixed(2).replace(".", ",")}`,
      checkinHoje: 0, // Isso deveria vir de uma API específica
      pagamentosAtrasados,
    };
  } catch (error) {
    console.error("Erro ao buscar stats:", error);
    return null;
  }
}

// Gráficos
export async function buscarReceitaPorMes(meses: number = 6): Promise<
  Array<{ mes: string; valor: number }>
> {
  try {
    const data = await fetchWithAuth(`/relatorios/receita?meses=${meses}`);
    return data;
  } catch (error) {
    console.error("Erro ao buscar receita por mês:", error);
    return [];
  }
}

export async function buscarReceitaPorPlano(): Promise<
  Array<{ plano: string; valor: number; porcentagem: number }>
> {
  try {
    const data = await fetchWithAuth("/relatorios/receita-por-plano");
    return data;
  } catch (error) {
    console.error("Erro ao buscar receita por plano:", error);
    return [];
  }
}

// Atividades
export async function buscarAtividades(limite: number = 10): Promise<
  Array<{ id: number; texto: string; tempo: string }>
> {
  try {
    const data = await fetchWithAuth(`/atividades?limit=${limite}`);
    return data;
  } catch (error) {
    console.error("Erro ao buscar atividades:", error);
    return [];
  }
}