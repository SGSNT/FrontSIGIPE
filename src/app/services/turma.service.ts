import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Turma } from '../models/turma';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/turma";

  constructor() { }

  findAll(): Observable<Turma[]>{
    return this.http.get<Turma[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<Turma>{
    return this.http.delete<Turma>(this.API+"/deleteById/"+id);
  }

  save(turma: Turma): Observable<Turma>{
    return this.http.post<Turma>(this.API+"/save", turma);
  }

  update(turma: Turma, id: number): Observable<Turma>{
    return this.http.put<Turma>(this.API+"/update/"+id, turma);
  }

  findById(id: number): Observable<Turma>{
    return this.http.get<Turma>(this.API+"/findById/"+id);
  }

  gerarTurmas(): Observable<Turma[]>{
    return this.http.post<Turma[]>(this.API+"/gerarTurmas", null);
  }
}
