import { Funcao } from './funcao';
import { Statuspessoa } from './statuspessoa';

export class Pessoa {
  id!: number;
  login!: string;
  senha!: number;
  cpf!: number;
  telefone!: number;
  funcao!: Funcao;
  status!: Statuspessoa;
  constructor(
    id: number,
    login: string,
    senha: number,
    cpf: number,
    telefone: number,
    funcao: Funcao,
    status: Statuspessoa
  ) {
    this.id = id;
    this.login = login;
    this.senha = senha;
    this.cpf = cpf;
    this.telefone = telefone;
    this.funcao = funcao;
    this.status = status;
  }
}
