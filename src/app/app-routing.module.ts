import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanadaSummaryComponent } from './components/canada-summary/canada-summary.component';
import { OntarioStatusComponent } from './components/ontario-status/ontario-status.component';
import { DetailPagePage } from './pages/detail-page/detail-page.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detail-page/:id',
    component: DetailPagePage
  },

  {
    path: 'canada-summary',
    component: CanadaSummaryComponent
  },
  {
    path: 'ontario-status',
    component: OntarioStatusComponent
  },

  {
    path: '',
    redirectTo: 'ontario-status',
    pathMatch: 'full'
  },
  {
    path: 'detail-page',
    loadChildren: () => import('./pages/detail-page/detail-page.module').then( m => m.DetailPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
