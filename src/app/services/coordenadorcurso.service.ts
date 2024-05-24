import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Coordenadorcurso } from '../models/coordenadorcurso';

@Injectable({
  providedIn: 'root'
})
export class CoordenadorcursoService {

  http = inject(HttpClient);

  API = "http://localhost:8081/api/coordenadorCurso";

  constructor() { }

  findAll(): Observable<Coordenadorcurso[]>{
    return this.http.get<Coordenadorcurso[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/deleteById/"+id, {responseType: 'text' as 'json'});
  }

  save(coordenadorCurso: Coordenadorcurso): Observable<string>{
    return this.http.post<string>(this.API+"/save", coordenadorCurso, {responseType: 'text' as 'json'});
  }

  update(coordenadorCurso: Coordenadorcurso, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, coordenadorCurso, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Coordenadorcurso>{
    return this.http.get<Coordenadorcurso>(this.API+"/findById/"+id);
  }
}
