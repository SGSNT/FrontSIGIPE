import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  http = inject(HttpClient);

  API = "http://localhost:8081/api/aluno";

  constructor() { }

  findAll(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/deleteById/"+id, {responseType: 'text' as 'json'});
  }

  save(aluno: Aluno): Observable<string>{
    return this.http.post<string>(this.API+"/save", aluno, {responseType: 'text' as 'json'});
  }

  update(aluno: Aluno, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, aluno, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Aluno>{
    return this.http.get<Aluno>(this.API+"/findById/"+id);
  }
}
