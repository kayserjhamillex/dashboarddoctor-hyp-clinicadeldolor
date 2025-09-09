import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';
import { ListFrecuenciaCita } from '../models/listfrecuenciacita';

@Injectable({
  providedIn: 'root'
})
export class FrecuenciacitaService {
  apiUrl = this.wasa.apiUrlGlobal + '/frecuenciacita';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getFrecuenciaCitas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getFrecuenciasCita(codigo: string | number) {
    return this.http.get(`${this.apiUrl}/dolor/${codigo}`);
  }

  getFrecuenciaCita(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteFrecuenciaCita(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveFrecuenciaCita( FrecuenciaCita: ListFrecuenciaCita) {
    return this.http.post(`${this.apiUrl}/create`, FrecuenciaCita);
  }

  updateFrecuenciaCita(id: string|number, updatedFrecuenciaCita: ListFrecuenciaCita): Observable<ListFrecuenciaCita> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedFrecuenciaCita);
  }

  getfordelete(codigo: string | number) {
    return this.http.get(`${this.apiUrl}/filtro/independiente/${codigo}`);
  }
}
