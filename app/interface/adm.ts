export interface Aluno {
  id: number;
  nome: string;
  idade: number | null;
  dataNascimento: Date | null;
  email: string;
  cpf: string;
  plano: string;
  updatedAt: Date;
  createdAt: Date;
  treinos?: Treino[];
}

export interface Funcionario {
  id: number;
  nome: string;
  adm: boolean;
  email: string;
  senha: string;
  idade: number | null;
  dataNascimento: Date | null;
  cpf: string;
  clt: string;
  turno: string;
  cargo: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface Treino {
  id: number;
  nome: string;
  descricao: string;
  dificuldade: string;
  duracao: number;
  tipoTreino: string;
  alunoId: number;
  aluno?: Aluno;
  updatedAt: Date;
  createdAt: Date;
}

export interface Receita {
  id: number;
  pagamento: string;
  dataPagamento: Date;
  valorPagamento: string;
  status: string;
  formaPagamento: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface ConfigAcademia {
  unidade: string;
  endereco: string;
  horario: string;
  capacidadeMaxima: string;
}

export interface Admin {
  id: number;
  nome: string;
  email: string;
  cargo: string;
  unidade: string;
  ultimoAcesso: string;
}

export interface Stats {
  alunosAtivos: number;
  funcionarios: number;
  receitaMensal: string;
  checkinHoje: number;
  pagamentosAtrasados: number;
}