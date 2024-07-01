import { Component, EventEmitter, Inject, Input, Output, TemplateRef, ViewChild, inject, input } from '@angular/core';
import { Coordenadorcurso } from '../../../../models/coordenadorcurso';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { DemandaService } from '../../../../services/demanda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Demanda } from '../../../../models/demanda';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demandasdisponiveiscoordenacaocurso',
  standalone: true,
  imports: [MdbModalModule],
  templateUrl: './demandasdisponiveiscoordenacaocurso.component.html',
  styleUrl: './demandasdisponiveiscoordenacaocurso.component.scss'
})
export class DemandasdisponiveiscoordenacaocursoComponent {

 


}
