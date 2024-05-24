import { Funcao } from './funcao';
import { Statuspessoa } from './statuspessoa';

export class Pessoa {
  idPessoa!: number;
  nome!: string;
  login!: string;
  senha!: number;
  cpf!: number;
  telefone!: number;
  funcao!: Funcao;
  status!: Statuspessoa;
  constructor() {}
}
