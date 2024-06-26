import { Component } from '@angular/core';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { GaalunosComponent } from './gaalunos/gaalunos.component';
import { GacursosComponent } from './gacursos/gacursos.component';
import { GacolegiadosComponent } from './gacolegiados/gacolegiados.component';

@Component({
  selector: 'app-gestaoacademica',
  standalone: true,
  imports: [MdbAccordionModule, GaalunosComponent,GacolegiadosComponent, GacursosComponent],
  templateUrl: './gestaoacademica.component.html',
  styleUrl: './gestaoacademica.component.scss'
})
export class GestaoacademicaComponent {

}
