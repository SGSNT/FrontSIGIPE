import { Curso } from "./curso";
import { Funcao } from "./funcao";
import { Periodo } from "./periodo";
import { Pessoa } from "./pessoa";
import { Statuspessoa } from "./statuspessoa";

export class Professor extends Pessoa{
    curso!: Curso;
    periodo!: Periodo;
    
    constructor(
        id: number,
        login: string,
        senha: number,
        cpf: number,
        telefone: number,
        funcao: Funcao,
        status: Statuspessoa,
        curso: Curso,
        periodo: Periodo
    ) {
        super(id, login, senha, cpf, telefone, funcao, status);
        this.curso = curso;
        this.periodo = periodo;
    }
}
