import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidData, OntarioData } from 'src/app/Interfaces/covid-data';

@Component({
  selector: 'app-canada-summary',
  templateUrl: './canada-summary.component.html',
  styleUrls: ['./canada-summary.component.scss'],
})
export class CanadaSummaryComponent {
  covidUpdates: Partial<CovidData> = {};
  ontarioStatus: Partial<OntarioData> = {};

  constructor(private http: HttpClient) {
    this.loadCovidUpdates();
    this.loadOntarioStatus();
  }

  loadCovidUpdates() {
    this.http.get<CovidData[]>('assets/Canada.json').subscribe(
      (data: CovidData[]) => {
        console.log('Canada data loaded:', data);
        const canadaData = data.find(item => item.prname === 'Canada');
        if (canadaData) {
          this.covidUpdates = canadaData;
          console.log('Canada COVID-19 updates:', this.covidUpdates);
        } else {
          console.error('Canada data not found');
        }
      },
      error => {
        console.error('Error loading Canada data:', error);
      }
    );
  }

  loadOntarioStatus() {
    this.http.get<any>('assets/Ontario (2).json').subscribe(
      (data: any) => {
        console.log('Ontario data loaded:', data);
        const ontarioData = data.records[data.records.length - 1];
        if (ontarioData) {
          this.ontarioStatus = {
            totalcases: ontarioData[9],
            resolved: ontarioData[6],
            deaths: ontarioData[7] ?? 0,
            hospitalized: ontarioData[13] ?? 0,
            icu: ontarioData[14] ?? 0,
            ventilator: ontarioData[18] ?? 0
          };
          console.log('Ontario status of cases:', this.ontarioStatus);
        } else {
          console.error('Ontario data not found');
        }
      },
      error => {
        console.error('Error loading Ontario data:', error);
      }
    );
  }
}
