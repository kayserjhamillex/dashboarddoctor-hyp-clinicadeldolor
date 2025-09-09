import { Title } from '@angular/platform-browser';

export interface AntPatologicoCita {
  id?: number,
  Condition?: string,
  ClienteId?: number,
  AntecedentepatologicoId?: number,
  antecedentepatologico: {
    id?: number,
    Name?: string
  },
  cliente: {
    id?: string,
    Name?: string,
    LastName?: string,
    DocumentNumber?: string,
    Email?: string
  },
}
