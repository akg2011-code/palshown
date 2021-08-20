import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LandingPageComponent } from './landing-page.component';


const routes = [
  {
    path: 'landingPage',
    component: LandingPageComponent
  }
];

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    TranslateModule,


  ]
})
export class LandingPageModule { }
