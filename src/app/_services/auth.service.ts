import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // details : String[] = ["name", "email", "password"]

  constructor(private http: HttpClient) { }

  register(details:String[]){
    return this.http.post("http://127.0.0.1:8000/register/", details )
  }
}
