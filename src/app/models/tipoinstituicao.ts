import { Instituicao } from "./instituicao";

export class Tipoinstituicao {
    id!: number;
    nome!: string;
    instituicoes: Instituicao[] = [];
    constructor(){}
}

