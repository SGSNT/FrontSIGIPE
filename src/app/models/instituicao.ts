export class Instituicao {
    idInstituicao!: number;
    nome!: string;
    cidade!: string;
    cep!: string;
    cnpj!: string; 
    razaoSocial!: string;

    constructor(idInstituicao: number, nome: string, cidade: string, cep: string, cnpj: string ,razaoSocial: string){

        this.idInstituicao = idInstituicao;
        this.nome = nome;
        this.cidade = cidade;
        this.cep = cep;
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;

    }

}
