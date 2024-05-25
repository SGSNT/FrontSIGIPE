import { Component } from '@angular/core';
import { DemandantelistComponent } from '../../../demandante/demandantelist/demandantelist.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DemandantelistComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
