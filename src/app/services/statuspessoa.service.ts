import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Statuspessoa } from '../models/statuspessoa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatuspessoaService {

  http = inject(HttpClient);

  API = "http://localhost:8081/api/statusPessoa";

  constructor() { }

  findAll(): Observable<Statuspessoa[]>{
    return this.http.get<Statuspessoa[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/deleteById/"+id, {responseType: 'text' as 'json'});
  }

  save(statusPessoa: Statuspessoa): Observable<string>{
    return this.http.post<string>(this.API+"/save", statusPessoa, {responseType: 'text' as 'json'});
  }

  update(statusPessoa: Statuspessoa, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, statusPessoa, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Statuspessoa>{
    return this.http.get<Statuspessoa>(this.API+"/findById/"+id);
  }
}
