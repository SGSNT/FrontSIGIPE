import { Instituicao } from "./instituicao";

export class Tipoinstituicao {
    idTipoInstituicao!: number;
    nome!: string;
    instituicoes: Instituicao[] = [];
    constructor(){}
}

