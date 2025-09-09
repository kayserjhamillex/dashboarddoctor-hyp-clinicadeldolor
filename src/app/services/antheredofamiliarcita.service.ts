import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './variable.service';
import { ListAntHeredoFamiliarCita } from '../models/listantheredofamiliarcita';

@Injectable({
  providedIn: 'root'
})
export class AntheredofamiliarcitaService {
  apiUrl = this.wasa.apiUrlGlobal + '/antecedenteheredofamiliarhistoria';
  constructor(
    private http: HttpClient,
    private wasa: GlobalService
  ) { }
  getAntHeredoFamiliarCitas() {
    return this.http.get(`${this.apiUrl}`);
  }

  getAntHeredoFamiliaresCita(codigo: string | number) {
    return this.http.get(`${this.apiUrl}/historia/${codigo}`);
  }

  getAntHeredoFamiliarCita(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteAntHeredoFamiliarCita(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  saveAntHeredoFamiliarCita( antecedentecita: ListAntHeredoFamiliarCita) {
    return this.http.post(`${this.apiUrl}/create`, antecedentecita);
  }

  updateAntHeredoFamiliarCita(id: string|number, updatedantecedentecita: ListAntHeredoFamiliarCita): Observable<ListAntHeredoFamiliarCita> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedantecedentecita);
  }

  getfordelete(codigo: string | number) {
    return this.http.get(`${this.apiUrl}/filtro/independiente/${codigo}`);
  }
}
