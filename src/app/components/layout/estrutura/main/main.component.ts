import { Component } from '@angular/core';
import { FuncaolistComponent } from '../../../funcao/funcaolist/funcaolist.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FuncaolistComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
