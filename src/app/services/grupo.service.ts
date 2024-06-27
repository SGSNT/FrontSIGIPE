import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from '../models/grupo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/grupo";


  constructor() { }
  findAll(): Observable<Grupo[]>{
    return this.http.get<Grupo[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<Grupo>{
    return this.http.delete<Grupo>(this.API+"/deleteById/"+id);
  }

  save(grupo: Grupo): Observable<Grupo>{
    return this.http.post<Grupo>(this.API+"/save", grupo);
  }

  update(grupo: Grupo, id: number): Observable<Grupo>{
    return this.http.put<Grupo>(this.API+"/update/"+id, grupo);
  }

  findById(id: number): Observable<Grupo>{
    return this.http.get<Grupo>(this.API+"/findById/"+id);
  }
}
