import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-ontario-status',
  templateUrl: './ontario-status.component.html',
  styleUrls: ['./ontario-status.component.scss'],
})
export class OntarioStatusComponent implements OnInit {
  ontarioStatus: any = {};
  records: any[] = [];
  followUpMessage: string = '';

  constructor(
    private dataService: DataService,
    private router: Router,
    private messagingService: MessagingService
  ) {}

  ngOnInit(): void {
    this.loadOntarioStatus();
    this.loadVaccineData();
    this.messagingService.currentMessage.subscribe(message => {
      this.followUpMessage = message;
      console.log('Received follow-up message:', message); // Debugging line
    });
  }

  loadOntarioStatus() {
    this.dataService.getOntarioData().subscribe(
      (data: any) => {
        const ontarioData = data.records[data.records.length - 1];
        if (ontarioData) {
          this.ontarioStatus = {
            totalcases: ontarioData[9],
            resolved: ontarioData[6],
            deaths: ontarioData[7] ?? 0,
            hospitalized: ontarioData[13] ?? 'N/A',
            icu: ontarioData[14] ?? 'N/A',
            ventilator: ontarioData[18] ?? 'N/A'
          };
        }
      },
      error => {
        console.error('Error loading Ontario data:', error);
      }
    );
  }

  loadVaccineData() {
    this.dataService.getVaccineData().subscribe(
      (data: { records: any[] }) => {
        this.records = data.records.map(record => ({
          report_date: new Date(record[1]).toLocaleDateString(),
          previous_day_total_doses_administered: record[2],
          total_doses_administered: record[6],
          totalcases: record[9],
          resolved: record[6],
          deaths: record[7],
          hospitalized: record[13] ?? 'N/A',
          icu: record[14] ?? 'N/A',
          ventilator: record[18] ?? 'N/A'
        }));
      },
      error => {
        console.error('Error loading vaccine data:', error);
      }
    );
  }

  onSelectRecord(record: any) {
    this.router.navigate(['/detail-page', { record: JSON.stringify(record) }]);
  }
}
