import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Coordenadorcurso } from '../models/coordenadorcurso';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoordenadorcursoService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/coordenadorCurso";

  constructor() { }

  findAll(): Observable<Coordenadorcurso[]>{
    return this.http.get<Coordenadorcurso[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<Coordenadorcurso>{
    return this.http.delete<Coordenadorcurso>(this.API+"/deleteById/"+id);
  }

  save(coordenadorCurso: Coordenadorcurso): Observable<Coordenadorcurso>{
    return this.http.post<Coordenadorcurso>(this.API+"/save", coordenadorCurso);
  }

  update(coordenadorCurso: Coordenadorcurso, id: number): Observable<Coordenadorcurso>{
    return this.http.put<Coordenadorcurso>(this.API+"/update/"+id, coordenadorCurso);
  }

  findById(id: number): Observable<Coordenadorcurso>{
    return this.http.get<Coordenadorcurso>(this.API+"/findById/"+id);
  }
}
