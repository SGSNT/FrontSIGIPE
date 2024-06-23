import { Aluno } from "./aluno";
import { Coordenadorcurso } from "./coordenadorcurso";
import { Demanda } from "./demanda";
import { Grupo } from "./grupo";
import { Periodo } from "./periodo";
import { Professor } from "./professor";

export class Curso {
    idCurso!: number;
    nome!: string;

    demandas: Demanda[] = [];
    alunos: Aluno[] = [];
    professores: Professor[] = [];
    coordenadores: Coordenadorcurso[] = [];
    periodos: Periodo[] = [];
    grupos: Grupo[] = [];

    constructor(){}
}
