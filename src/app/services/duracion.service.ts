import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Duracion } from '../models/duracion';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class DuracionService {
  apiUrl = this.wasa.apiUrlGlobal + '/duracion';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getDuracions() {
    return this.http.get(`${this.apiUrl}`);
  }

  getDuracion(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteDuracion(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveDuracion( duracion: Duracion) {
    return this.http.post(`${this.apiUrl}/create`, duracion);
  }

  updateDuracion(id: string|number, updatedduracion: Duracion): Observable<Duracion> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedduracion);
  }
}
