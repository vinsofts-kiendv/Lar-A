import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { RouteModule } from "./route/route.module";
import { ModalModule, BsModalRef } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [
    CookieService,
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
