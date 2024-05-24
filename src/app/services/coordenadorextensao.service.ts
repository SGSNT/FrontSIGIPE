import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Coordenadorextensao } from '../models/coordenadorextensao';
@Injectable({
  providedIn: 'root'
})
export class CoordenadorextensaoService {

  http = inject(HttpClient);

  API = "http://localhost:8081/api/coordenadorExtensao";

  constructor() { }

  findAll(): Observable<Coordenadorextensao[]>{
    return this.http.get<Coordenadorextensao[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/deleteById/"+id, {responseType: 'text' as 'json'});
  }

  save(coordenadorExtensao: Coordenadorextensao): Observable<string>{
    return this.http.post<string>(this.API+"/save", coordenadorExtensao, {responseType: 'text' as 'json'});
  }

  update(coordenadorExtensao: Coordenadorextensao, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, coordenadorExtensao, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Coordenadorextensao>{
    return this.http.get<Coordenadorextensao>(this.API+"/findById/"+id);
  }
}
