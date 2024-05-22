import { Component, inject } from '@angular/core';
import { Funcao } from '../../../models/funcao';
import { FuncaoService } from '../../../services/funcao.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcaolist',
  standalone: true,
  imports: [],
  templateUrl: './funcaolist.component.html',
  styleUrl: './funcaolist.component.scss'
})
export class FuncaolistComponent {
  lista: Funcao[] = [];

  funcaoService = inject(FuncaoService);

  constructor(){
    this.findAll();
  }

  findAll(){
    this.funcaoService.findAll().subscribe(
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
  deleteById(funcao: Funcao){
    Swal.fire({
      title: "Tem certeza que quer excluir a função "+funcao.nome+"?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Sim",
      denyButtonText: `Não (Cancelar)`
    }).then((result) => {
      if (result.isConfirmed) {
        this.funcaoService.delete(funcao.idFuncao).subscribe(
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
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

}
