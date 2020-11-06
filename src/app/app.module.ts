import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProgramComponent } from './program/program.component';
import { HttpClientModule } from "@angular/common/http";
// import { ServiceComponent } from './service/service.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProgramComponent,
    // ServiceComponent,
    NavbarComponent,
    // ServicesComponent,
    WorkComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
