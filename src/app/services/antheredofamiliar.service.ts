import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';
import { AntHeredoFamiliar } from '../models/antheredofamiliar';

@Injectable({
  providedIn: 'root'
})
export class AntheredofamiliarService {
  apiUrl = this.wasa.apiUrlGlobal + '/antecedenteheredofamiliar';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getAntHeredoFamiliars() {
    return this.http.get(`${this.apiUrl}`);
  }

  getAntHeredoFamiliar(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteAntHeredoFamiliar(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveAntHeredoFamiliar( antecedente: AntHeredoFamiliar) {
    return this.http.post(`${this.apiUrl}/create`, antecedente);
  }

  updateAntHeredoFamiliar(id: string|number, updatedantecedente: AntHeredoFamiliar): Observable<AntHeredoFamiliar> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedantecedente);
  }
}
