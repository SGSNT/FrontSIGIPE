import { Curso } from "./curso";
import { Funcao } from "./funcao";
import { Pessoa } from "./pessoa";
import { Statuspessoa } from "./statuspessoa";

export class Coordenadorcurso extends Pessoa {
    curso!: Curso;

    constructor(
        id: number,
        login: string,
        senha: number,
        cpf: number,
        telefone: number,
        funcao: Funcao,
        status: Statuspessoa,
        curso: Curso
    ) {
        super(id, login, senha, cpf, telefone, funcao, status);
        this.curso = curso;
    }
}
