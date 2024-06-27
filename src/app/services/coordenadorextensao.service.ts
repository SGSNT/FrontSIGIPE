import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Coordenadorextensao } from '../models/coordenadorextensao';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CoordenadorextensaoService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/coordenadorExtensao";

  constructor() { }

  findAll(): Observable<Coordenadorextensao[]>{
    return this.http.get<Coordenadorextensao[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<Coordenadorextensao>{
    return this.http.delete<Coordenadorextensao>(this.API+"/deleteById/"+id);
  }

  save(coordenadorExtensao: Coordenadorextensao): Observable<Coordenadorextensao>{
    return this.http.post<Coordenadorextensao>(this.API+"/save", coordenadorExtensao);
  }

  update(coordenadorExtensao: Coordenadorextensao, id: number): Observable<Coordenadorextensao>{
    return this.http.put<Coordenadorextensao>(this.API+"/update/"+id, coordenadorExtensao);
  }

  findById(id: number): Observable<Coordenadorextensao>{
    return this.http.get<Coordenadorextensao>(this.API+"/findById/"+id);
  }
}
