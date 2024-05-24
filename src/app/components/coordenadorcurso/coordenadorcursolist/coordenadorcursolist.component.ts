import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CoordenadorcursodetailsComponent } from '../coordenadorcursodetails/coordenadorcursodetails.component';
import { Coordenadorcurso } from '../../../models/coordenadorcurso';
import { CoordenadorcursoService } from '../../../services/coordenadorcurso.service';

@Component({
  selector: 'app-coordenadorcursolist',
  standalone: true,
  imports: [CoordenadorcursodetailsComponent, MdbModalModule],
  templateUrl: './coordenadorcursolist.component.html',
  styleUrl: './coordenadorcursolist.component.scss'
})
export class CoordenadorcursolistComponent {
  lista: Coordenadorcurso[] = [];
  coordenadorCursoEdit: Coordenadorcurso = new Coordenadorcurso();
  
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalCoordenadorCursoDetalhe") modalCoordenadorCursoDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  coordenadorCursoService = inject(CoordenadorcursoService);

  constructor(){
    this.findAll();
  }

  findAll(){
    this.coordenadorCursoService.findAll().subscribe(
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
  deleteById(coordenadorCurso: Coordenadorcurso){
    Swal.fire({
      title: "Tem certeza que quer excluir a função "+coordenadorCurso.nome+"?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sim",
      denyButtonText: `Não (Cancelar)`
    }).then((result) => {
      if (result.isConfirmed) {
        this.coordenadorCursoService.delete(coordenadorCurso.idPessoa).subscribe(
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
    this.coordenadorCursoEdit = new Coordenadorcurso();
    this.modalRef = this.modalService.open(this.modalCoordenadorCursoDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
  edit(coordenadorCurso: Coordenadorcurso){
    this.coordenadorCursoEdit = Object.assign({}, coordenadorCurso);
    this.modalRef = this.modalService.open(this.modalCoordenadorCursoDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }

  retornoDetalhe(coordenadorCurso: Coordenadorcurso){
    this.findAll();
    this.modalRef.close();
  }

}
