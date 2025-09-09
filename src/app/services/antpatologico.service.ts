import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';
import { AntPatologico } from '../models/antpatologico';

@Injectable({
  providedIn: 'root'
})
export class AntpatologicoService {
  apiUrl = this.wasa.apiUrlGlobal + '/antecedentepatologico';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getAntPatologicos() {
    return this.http.get(`${this.apiUrl}`);
  }

  getAntPatologico(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteAntPatologico(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveAntPatologico( antecedente: AntPatologico) {
    return this.http.post(`${this.apiUrl}/create`, antecedente);
  }

  updateAntPatologico(id: string|number, updatedantecedente: AntPatologico): Observable<AntPatologico> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedantecedente);
  }
}
