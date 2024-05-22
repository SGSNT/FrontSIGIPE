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

    constructor(
        id: number,
        nome: string,
        cidade: string,
        cep: string,
        cnpj: string,
        razaoSocial: string,
        tipoInstituicao: Tipoinstituicao,
        demandantes: Demandante[],
        demandas: Demanda[]
    ) {
        this.id = id;
        this.nome = nome;
        this.cidade = cidade;
        this.cep = cep;
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.tipoInstituicao = tipoInstituicao;
        this.demandantes = demandantes;
        this.demandas = demandas;
    }
}
