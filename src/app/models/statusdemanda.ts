import { Demanda } from "./demanda";

export class Statusdemanda {
    id!: number;
    nome!: string;
    demandas: Demanda[] = [];

    constructor(id: number, nome: string, demandas: Demanda[]){
        this.demandas = demandas;
        this.id = id;
        this.nome = nome;
    }
}
