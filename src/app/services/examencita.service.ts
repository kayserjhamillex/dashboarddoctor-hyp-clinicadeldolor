import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';
import { ListExamenCita } from '../models/listexamenpaciente';

@Injectable({
  providedIn: 'root'
})
export class ExamencitaService {
  apiUrl = this.wasa.apiUrlGlobal + '/examen';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getExamenCitas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getExamenCitaCita(codigo: string | number) {
    return this.http.get(`${this.apiUrl}/dolor/${codigo}`);
  }

  getExamenCita(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteExamenCita(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveExamenCita( detalleCita: ListExamenCita) {
    return this.http.post(`${this.apiUrl}/create`, detalleCita);
  }

  updateExamenCita(id: string|number, updateddetalleCita: ListExamenCita): Observable<ListExamenCita> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updateddetalleCita);
  }
}
