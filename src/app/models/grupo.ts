import { Aluno } from "./aluno";
import { Demanda } from "./demanda";

export class Grupo {
    id!: number;
    nome!: string;
    demanda!: Demanda;
    alunos: Aluno[] = [];

    constructor() {}
}
