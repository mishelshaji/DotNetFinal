import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from './../helpers/interceptors/errorInterceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { UserLayoutComponent } from './user-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactComponent } from './shared/contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserLayoutComponent,
    NavbarComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  providers: []
})
export class UserModule { }
