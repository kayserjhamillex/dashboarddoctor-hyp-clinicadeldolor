import { Title } from '@angular/platform-browser';

export interface AntNoPatologicoCita {
  id?: number,
  Condition?: string,
  ClienteId?: number,
  AntecedentenopatologicoId?: number,
  antecedentenopatologico: {
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
