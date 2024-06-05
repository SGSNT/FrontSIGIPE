import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cardgrid',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cardgrid.component.html',
  styleUrl: './cardgrid.component.scss'
})
export class CardgridComponent {

}
