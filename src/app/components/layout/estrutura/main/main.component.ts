import { Component } from '@angular/core';
import { FuncaolistComponent } from '../../../funcao/funcaolist/funcaolist.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FuncaolistComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
