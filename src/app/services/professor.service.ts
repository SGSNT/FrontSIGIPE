import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Professor } from '../models/professor';
@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/professor";

  constructor() { }

  findAll(): Observable<Professor[]>{
    return this.http.get<Professor[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<Professor>{
    return this.http.delete<Professor>(this.API+"/deleteById/"+id);
  }

  save(professor: Professor): Observable<Professor>{
    return this.http.post<Professor>(this.API+"/save", professor);
  }

  update(professor: Professor, id: number): Observable<Professor>{
    return this.http.put<Professor>(this.API+"/update/"+id, professor);
  }

  findById(id: number): Observable<Professor>{
    return this.http.get<Professor>(this.API+"/findById/"+id);
  }
}
