import { Title } from '@angular/platform-browser';

export interface AntHeredoFamiliarCita {
  id?: number,
  Condition?: string,
  ClienteId?: number,
  AntecedenteheredofamiliarId?: number,
  antecedenteheredofamiliar: {
    id?: number,
    Name?: string
  },
  cliente: {
    id?: string,
    Name?: string,
    LastName?: string,
    DocumentNumber?: string,
    Email?: string
  }
}
