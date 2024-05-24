import { Component } from '@angular/core';
import { InstituicaolistComponent } from '../../../instituicaolist/instituicaolist.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [InstituicaolistComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
