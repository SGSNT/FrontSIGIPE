import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Statusdemanda } from '../models/statusdemanda';

@Injectable({
  providedIn: 'root'
})
export class StatusdemandaService {

  http = inject(HttpClient);

  API = "http://localhost:8081/api/statusDemanda";

  constructor() { }

  findAll(): Observable<Statusdemanda[]>{
    return this.http.get<Statusdemanda[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/deleteById/"+id, {responseType: 'text' as 'json'});
  }

  save(statusDemanda: Statusdemanda): Observable<string>{
    return this.http.post<string>(this.API+"/save", statusDemanda, {responseType: 'text' as 'json'});
  }

  update(statusDemanda: Statusdemanda, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, statusDemanda, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Statusdemanda>{
    return this.http.get<Statusdemanda>(this.API+"/findById/"+id);
  }
}
