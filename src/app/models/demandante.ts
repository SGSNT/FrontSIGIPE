import { Demanda } from "./demanda";
import { Instituicao } from "./instituicao";

export class Demandante {
    id!: number;
    nome!: string;
    email!: string;
    telefone!: string;

    instituicao!: Instituicao;
    demandas: Demanda[] = []

    constructor() {}
}
