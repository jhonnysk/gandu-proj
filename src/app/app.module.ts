import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent} from './app.component';
import { HttpTestService } from './http-test.service';
import { DetailComponent } from './detail/detail.component';

import * as $ from 'jquery';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { MyTeamComponent } from './my-team/my-team.component';
// import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    FileDropDirective, 
    FileSelectDirective, LandingComponentComponent, MyTeamComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
     RouterModule.forRoot([
      { path: '', redirectTo: '/landing', pathMatch: 'full' },
      { path: 'landing',component: LandingComponentComponent },
      { path: 'team',component: MyTeamComponent },
      {
        // path: 'detail/:id/:name',
        path: 'detail',
        component: DetailComponent
      }
      
    ]),

    BrowserAnimationsModule,
    
  ],
  providers: [HttpTestService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
