import { Component, OnInit } from '@angular/core';
import { AuthService } from "../_services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  users: String[] = []


  finalizeRegistration(name:String, email:String, password:String){
    this.users.push(name, email, password);
    this.authService.register(this.users).subscribe(data =>{
      console.log(data);
      
    })

  }

  ngOnInit(): void {
  }

}
