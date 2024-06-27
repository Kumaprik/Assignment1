import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataRecord } from '../Interfaces/covid-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCanadaData() {
    return this.http.get('assets/Canada.json');
  }

  getOntarioData(): Observable<any> {
    return this.http.get<any>('assets/Ontario (2).json');
  }

  getVaccineData(): Observable<{ records: DataRecord[] }> {
    return this.http.get<{ records: DataRecord[] }>('assets/data.json');
  }
}
