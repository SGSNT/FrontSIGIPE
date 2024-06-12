import { Component, Input } from '@angular/core';
import { Demanda } from '../../../../models/demanda';

@Component({
  selector: 'app-demanda-modal',
  standalone: true,
  imports: [],
  templateUrl: './demanda-modal.component.html',
  styleUrl: './demanda-modal.component.scss'
})
export class DemandaModalComponent {
  @Input('demanda')
  demanda!: Demanda;

}
