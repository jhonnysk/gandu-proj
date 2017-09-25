import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { HttpTestService } from './http-test.service';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
     RouterModule.forRoot([
      {
        path: 'detail/:id/:name',
        component: DetailComponent
      }
    ])
    
  ],
  providers: [HttpTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
