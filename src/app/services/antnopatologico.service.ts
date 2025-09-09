import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';
import { AntNoPatologico } from '../models/antnopatologico';

@Injectable({
  providedIn: 'root'
})
export class AntnopatologicoService {
  apiUrl = this.wasa.apiUrlGlobal + '/antecedentenopatologico';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getAntNoPatologicos() {
    return this.http.get(`${this.apiUrl}`);
  }

  getAntNoPatologico(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteAntNoPatologico(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveAntNoPatologico( antecedente: AntNoPatologico) {
    return this.http.post(`${this.apiUrl}/create`, antecedente);
  }

  updateAntNoPatologico(id: string|number, updatedantecedente: AntNoPatologico): Observable<AntNoPatologico> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedantecedente);
  }
}
