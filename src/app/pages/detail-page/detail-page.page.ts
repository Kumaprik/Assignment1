// src/app/pages/detail-page/detail-page.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.page.html',
  styleUrls: ['./detail-page.page.scss']
})
export class DetailPagePage implements OnInit {
  record: any;
  followUpMessage: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private messagingService: MessagingService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('Params:', params); // Debugging line
      this.record = JSON.parse(params['record']);
      console.log('Record:', this.record); // Debugging line
    });
  }

  sendMessage(message: string) {
    console.log('Message sent:', message); // Debugging line
    this.messagingService.changeMessage(message);
  }

  goBack() {
    this.router.navigate(['/ontario-status']);
  }
}
