import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from '../models/grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  http = inject(HttpClient);

  API = "http://localhost:8081/api/grupo";


  constructor() { }
  findAll(): Observable<Grupo[]>{
    return this.http.get<Grupo[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/deleteById/"+id, {responseType: 'text' as 'json'});
  }

  save(grupo: Grupo): Observable<string>{
    return this.http.post<string>(this.API+"/save", grupo, {responseType: 'text' as 'json'});
  }

  update(grupo: Grupo, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, grupo, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Grupo>{
    return this.http.get<Grupo>(this.API+"/findById/"+id);
  }
}
