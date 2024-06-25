import { Demanda } from "./demanda";
import { Demandante } from "./demandante";
import { Tipoinstituicao } from "./tipoinstituicao";

export class Instituicao {
    id!: number;
    nome!: string;
    cidade!: string;

    tipo!: Tipoinstituicao;
    demandantes: Demandante[] = [];
    demandas: Demanda[] = [];
    
    constructor() {}
}
