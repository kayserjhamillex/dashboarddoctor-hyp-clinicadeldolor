import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public apiUrlGlobal = 'https://clinic-pain.herokuapp.com';
  // public apiUrlGlobal = 'http://localhost:666';
  constructor() { }
}
