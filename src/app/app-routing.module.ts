import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WorkComponent } from './work/work.component';
import { ProgramComponent } from './program/program.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path:"", component: HomepageComponent},
  {path:"services", component: WorkComponent},
  {path:"programs", component: ProgramComponent},
  {path:"contact", component: ContactComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
