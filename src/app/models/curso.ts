import { Aluno } from "./aluno";
import { Coordenadorcurso } from "./coordenadorcurso";
import { Demanda } from "./demanda";
import { Professor } from "./professor";
import { Turma } from "./turma";

export class Curso {
    id!: number;
    nome!: string;
    quantidadePeriodos!: number;

    alunos: Aluno[] = [];
    professores: Professor[] = [];
    coordenadores: Coordenadorcurso[] = [];
    demandas: Demanda[] = [];
    turmas: Turma[] = [];

    constructor(){}
}
