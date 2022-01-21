import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/register-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  private signUpUlr : string;

  constructor(private http: HttpClient) { 
    this.signUpUlr = "http://localhost:8080/register/register";
  }

  sendRegisterData(registerData: RegisterModel) : Observable<RegisterModel>{
    console.log("This is from UI: "+ registerData.username);
    return this.http.post<RegisterModel>(this.signUpUlr,registerData) as Observable<RegisterModel>
  }

}
