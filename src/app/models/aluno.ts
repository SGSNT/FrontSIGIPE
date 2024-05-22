import { Curso } from "./curso";
import { Funcao } from "./funcao";
import { Grupo } from "./grupo";
import { Periodo } from "./periodo";
import { Pessoa } from "./pessoa";
import { Statuspessoa } from "./statuspessoa";

export class Aluno extends Pessoa {
    curso!: Curso;
    periodo!: Periodo;
    grupos: Grupo[] = [];

    constructor(
        id: number,
        login: string,
        senha: number,
        cpf: number,
        telefone: number,
        funcao: Funcao,
        status: Statuspessoa,
        curso: Curso,
        periodo: Periodo,
        grupos: Grupo[]
    ) {
        super(id, login, senha, cpf, telefone, funcao, status);
        this.curso = curso;
        this.periodo = periodo;
        this.grupos = grupos;
    }
}
