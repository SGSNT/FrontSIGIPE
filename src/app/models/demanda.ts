import { Curso } from "./curso";
import { Demandante } from "./demandante";
import { Grupo } from "./grupo";
import { Instituicao } from "./instituicao";
import { Statusdemanda } from "./statusdemanda";

export class Demanda {
    idDemanda!: number;
    quantidadeGrupo!: number;
    problema!: string;
    resultado!: string;
    impacto!: string;
    prazo!: string;
    grupos: Grupo[] = [];
    instituicao!: Instituicao;
    demandante!: Demandante;
    status!: Statusdemanda;
    cursos: Curso[] = [];

    constructor(){}
}
