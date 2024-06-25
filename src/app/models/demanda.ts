import { Curso } from "./curso";
import { Demandante } from "./demandante";
import { Grupo } from "./grupo";
import { Instituicao } from "./instituicao";
import { Statusdemanda } from "./statusdemanda";
import { Turma } from "./turma";

export class Demanda {
    id!: number;
    quantidadeGrupo!: number;
    descricaoProblema!: string;
    resultadosEsperados!: string;
    nivelImpacto!: string;
    expectativaPrazo!: string;
    
    status!: Statusdemanda;
    demandante!: Demandante;
    instituicao!: Instituicao;
    cursos: Curso[] = [];
    turmas: Turma[] = [];
    gruposInscritos: Grupo[] = [];
    gruposSolicitacao: Grupo[] = [];

    constructor(){}
}
