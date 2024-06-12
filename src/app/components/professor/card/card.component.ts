import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { Demanda } from '../../../models/demanda';
import { DemandaModalComponent } from '../demanda/demanda-modal/demanda-modal.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DemandaModalComponent, MdbModalModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input('demanda')
  demanda!: Demanda; 

  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild('modalDemanda')
  modalPeriodoDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  abreModal(){
    this.modalRef = this.modalService.open(this.modalPeriodoDetalhe, {modalClass: 'modal-xl'});
  }
}
