import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { StatuspessoadetailsComponent } from '../statuspessoadetails/statuspessoadetails.component';
import { Statuspessoa } from '../../../models/statuspessoa';
import { StatuspessoaService } from '../../../services/statuspessoa.service';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-statuspessoalist',
  standalone: true,
  imports: [StatuspessoadetailsComponent, MdbModalModule],
  templateUrl: './statuspessoalist.component.html',
  styleUrl: './statuspessoalist.component.scss'
})
export class StatuspessoalistComponent {
  lista: Statuspessoa[] = [];
  statusPessoaEdit: Statuspessoa = new Statuspessoa();
  
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalStatusPessoaDetalhe") modalStatusPessoaDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  statusPessoaService = inject(StatuspessoaService);

  constructor(){
    this.findAll();
  }

  findAll(){
    this.statusPessoaService.findAll().subscribe(
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
  deleteById(statusPessoa: Statuspessoa){
    Swal.fire({
      title: "Tem certeza que quer excluir a função "+statusPessoa.nome+"?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sim",
      denyButtonText: `Não (Cancelar)`
    }).then((result) => {
      if (result.isConfirmed) {
        this.statusPessoaService.delete(statusPessoa.idStatusPessoa).subscribe(
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
  new(){
    this.statusPessoaEdit = new Statuspessoa();
    this.modalRef = this.modalService.open(this.modalStatusPessoaDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
  edit(statusPessoa: Statuspessoa){
    this.statusPessoaEdit = Object.assign({}, statusPessoa);
    this.modalRef = this.modalService.open(this.modalStatusPessoaDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }

  retornoDetalhe(statusPessoa: Statuspessoa){
    this.findAll();
    this.modalRef.close();
  }

}
