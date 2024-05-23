import { Funcao } from './funcao';
import { Statuspessoa } from './statuspessoa';

export class Pessoa {
  id!: number;
  nome!: string;
  login!: string;
  senha!: number;
  cpf!: number;
  telefone!: number;
  funcao!: Funcao;
  status!: Statuspessoa;
  constructor() {}
}
