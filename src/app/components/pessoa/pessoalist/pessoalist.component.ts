import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { Pessoa } from '../../../models/pessoa';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { PessoaService } from '../../../services/pessoa.service';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-pessoalist',
  standalone: true,
  imports: [MdbModalModule],
  templateUrl: './pessoalist.component.html',
  styleUrl: './pessoalist.component.scss'
})
export class PessoalistComponent {
  lista: Pessoa[] = [];
  pessoaEdit: Pessoa = new Pessoa();

  pessoaService = inject(PessoaService);

  constructor(){
    this.findAll();
  }

  findAll(){
    this.pessoaService.findAll().subscribe(
      {
        next: listaService =>{
          this.lista = listaService;
        },
        error: erro =>{
          Swal.fire({
            title: "Houve um erro",
            text: "Mais informações ",
            icon: "error"
          });
          console.log(erro);
        }
      }
    );
  }
  deleteById(pessoa: Pessoa){
    Swal.fire({
      title: "Tem certeza que quer excluir a função "+pessoa.nome+"?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sim",
      denyButtonText: `Não (Cancelar)`
    }).then((result) => {
      if (result.isConfirmed) {
        this.pessoaService.delete(pessoa.idPessoa).subscribe(
          {
            next: mensagem =>{
              this.findAll();
              Swal.fire({
                title: "Sucesso",
                text: mensagem,
                icon: "success"
              });
            },
            error: erro =>{
              Swal.fire({
                title: "Houve um erro",
                text: "Mais informações no console",
                icon: "error"
              });
              console.log(erro);
            }
          }
        );
      }
    });
  }

}
