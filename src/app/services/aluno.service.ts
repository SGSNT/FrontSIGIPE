import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/aluno";

  constructor() { }

  findAll(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<Aluno>{
    return this.http.delete<Aluno>(this.API+"/deleteById/"+id);
  }

  save(aluno: Aluno): Observable<Aluno>{
    return this.http.post<Aluno>(this.API+"/save", aluno);
  }

  update(aluno: Aluno, id: number): Observable<Aluno>{
    return this.http.put<Aluno>(this.API+"/update/"+id, aluno);
  }

  findById(id: number): Observable<Aluno>{
    return this.http.get<Aluno>(this.API+"/findById/"+id);
  }
}
