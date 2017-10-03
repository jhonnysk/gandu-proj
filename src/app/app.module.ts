import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent} from './app.component';
import { HttpTestService } from './http-test.service';
import { DetailComponent } from './detail/detail.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { LightboxModule } from 'angular2-lightbox';
import * as $ from 'jquery';


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
    MDBBootstrapModule,LightboxModule
    
  ],
  providers: [HttpTestService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
  
})
export class AppModule { }
