import { Component, Input } from '@angular/core';
import { Demanda } from '../../../models/demanda';
import { Pessoa } from '../../../models/pessoa';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input('demanda')
  demanda!: Demanda;
}
