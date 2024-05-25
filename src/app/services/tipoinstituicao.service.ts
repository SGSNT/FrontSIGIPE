import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Tipoinstituicao } from '../models/tipoinstituicao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoinstituicaoService {
  
  http = inject(HttpClient);

  API = "http://localhost:8081/api/tipoInstituicao";

  constructor() { }

  findAll(): Observable<Tipoinstituicao[]>{
    return this.http.get<Tipoinstituicao[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/deleteById/"+id, {responseType: 'text' as 'json'});
  }

  save(tipoInstituicao: Tipoinstituicao): Observable<string>{
    return this.http.post<string>(this.API+"/save", tipoInstituicao, {responseType: 'text' as 'json'});
  }

  update(tipoInstituicao: Tipoinstituicao, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, tipoInstituicao, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Tipoinstituicao>{
    return this.http.get<Tipoinstituicao>(this.API+"/findById/"+id);
  }
}
