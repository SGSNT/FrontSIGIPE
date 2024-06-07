import { Component, Input, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Demanda } from '../../../models/demanda';

@Component({
  selector: 'app-cardgrid',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cardgrid.component.html',
  styleUrl: './cardgrid.component.scss'
})
export class CardgridComponent {
  @Input("listaDemandas")
  listaDemandas: Demanda[] = [];
}
