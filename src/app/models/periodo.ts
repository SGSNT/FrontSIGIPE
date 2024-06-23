import { Aluno } from "./aluno";
import { Curso } from "./curso";
import { Demanda } from "./demanda";
import { Grupo } from "./grupo";
import { Professor } from "./professor";

export class Periodo {
    idPeriodo!: number;
    periodo!: number;

    professores: Professor[] = [];
    alunos: Aluno[] = [];
    cursos: Curso[] = [];
    grupos: Grupo[] = [];
    demandas: Demanda[] = [];
    

    constructor() {}
}