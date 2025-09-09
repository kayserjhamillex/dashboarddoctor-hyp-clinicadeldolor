import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Frecuencia } from '../models/frecuencia';
import { GlobalService } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class FrecuenciaService {
  apiUrl = this.wasa.apiUrlGlobal + '/frecuencia';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getFrecuencias() {
    return this.http.get(`${this.apiUrl}`);
  }

  getFrecuencia(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteFrecuencia(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveFrecuencia( frecuencia: Frecuencia) {
    return this.http.post(`${this.apiUrl}/create`, frecuencia);
  }

  updateFrecuencia(id: string|number, updatedfrecuencia: Frecuencia): Observable<Frecuencia> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedfrecuencia);
  }
}
