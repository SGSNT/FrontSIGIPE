import { Aluno } from "./aluno";
import { Professor } from "./professor";

export class Periodo {
    idPeriodo!: number;
    periodo!: number;
    professores: Professor[] = [];
    alunos: Aluno[] = [];

    constructor() {}
}