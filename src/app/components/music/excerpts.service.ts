import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Excerpts } from './excerpts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcerptsService {

  private readonly API = 'http://localhost:3000/excerpts'

  constructor(private http: HttpClient) { }

  // método dentro do service que solicitará ao HTTP a lista dos trechos
  // de musicas que se encontra na API
  list(): Observable<Excerpts[]> {
    return this.http.get<Excerpts[]>(this.API)
  }

  create(excerpts: Excerpts): Observable<Excerpts> {
    return this.http.post<Excerpts>(this.API, excerpts)
  }

  cancel(excerpts: Excerpts): Observable<Excerpts> {
    return this.http.post<Excerpts>(this.API, excerpts)
  }

  delete(id: number): Observable<Excerpts> {
    const url = `${this.API}/${id}`
    return this.http.delete<Excerpts>(url)
  }

  searchById(id: number): Observable<Excerpts> {
    const url = `${this.API}/${id}`
    return this.http.get<Excerpts>(url)
  }
}
