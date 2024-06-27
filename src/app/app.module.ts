import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CanadaSummaryComponent } from './components/canada-summary/canada-summary.component';
import { OntarioStatusComponent } from './components/ontario-status/ontario-status.component';
import { FormsModule } from '@angular/forms';
import { DetailPagePage } from './pages/detail-page/detail-page.page';
import { MessagingService } from './services/messaging.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [AppComponent,CanadaSummaryComponent,
    OntarioStatusComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },MessagingService,
    DataService
],  

  bootstrap: [AppComponent],
})
export class AppModule {}
