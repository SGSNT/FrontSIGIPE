import { Demanda } from "./demanda";
import { Instituicao } from "./instituicao";

export class Demandante {
    idDemandante!: number;
    nome!: string;
    email!: string;
    telefone!: string;

    constructor(
        idDemandante: number,
        nome: string,
        email: string,
        telefone: string,
    ) {
        this.idDemandante = idDemandante;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}
