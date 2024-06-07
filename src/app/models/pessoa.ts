import { Funcao } from './funcao';
import { Statuspessoa } from './statuspessoa';

export class Pessoa {
  idPessoa!: number;
  nome!: string;
  login!: string;
  senha!: string;
  cpf!: string;
  telefone!: string;
  funcao!: Funcao;
  status!: Statuspessoa;
  constructor() {}
}
