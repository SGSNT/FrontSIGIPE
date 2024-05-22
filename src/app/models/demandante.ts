import { Demanda } from "./demanda";
import { Instituicao } from "./instituicao";

export class Demandante {
    id!: number;
    nome!: string;
    email!: string;
    telefone!: string;
    instituicao!: Instituicao;
    demandas: Demanda[] = [];

    constructor(
        id: number,
        nome: string,
        email: string,
        telefone: string,
        instituicao: Instituicao,
        demandas: Demanda[]
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.instituicao = instituicao;
        this.demandas = demandas;
    }
}
