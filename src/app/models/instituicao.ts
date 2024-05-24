import { Demanda } from "./demanda";
import { Demandante } from "./demandante";
import { Tipoinstituicao } from "./tipoinstituicao";

export class Instituicao {
    id!: number;
    nome!: string;
    cidade!: string;
    cep!: string;
    cnpj!: string;
    razaoSocial!: string;
    tipoInstituicao!: Tipoinstituicao;
    demandantes: Demandante[] = [];
    demandas: Demanda[] = [];

    constructor() {}
}
