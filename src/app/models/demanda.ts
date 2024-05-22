import { Curso } from "./curso";
import { Demandante } from "./demandante";
import { Grupo } from "./grupo";
import { Instituicao } from "./instituicao";
import { Statusdemanda } from "./statusdemanda";

export class Demanda {
    id!: number;
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

    constructor(id: number, quantidadeGrupo: number, problema: string, resultado: string, impacto: string, prazo: string, grupos: Grupo[], instituicao: Instituicao, demandante: Demandante, status: Statusdemanda, cursos: Curso[]){
        this.cursos = cursos;
        this.demandante = demandante;
        this.grupos = grupos;
        this.id = id;
        this.impacto = impacto;
        this.instituicao = instituicao;
        this.prazo = prazo;
        this.problema = problema;
        this.quantidadeGrupo = quantidadeGrupo;                                       
        this.resultado = resultado;
        this.status = status;
    }
}
