import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProgramComponent } from './program/program.component';
// import { ServiceComponent } from './service/service.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
