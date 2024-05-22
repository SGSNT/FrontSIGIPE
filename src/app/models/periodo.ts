import { Aluno } from "./aluno";
import { Professor } from "./professor";

export class Periodo {
    id!: number;
    periodo!: number;
    professores: Professor[] = [];
    alunos: Aluno[] = [];

    constructor(
        id: number,
        periodo: number,
        professores: Professor[],
        alunos: Aluno[]
    ) {
        this.id = id;
        this.periodo = periodo;
        this.professores = professores;
        this.alunos = alunos;
    }
}