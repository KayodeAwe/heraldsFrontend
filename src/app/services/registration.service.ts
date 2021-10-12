import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private _registerurl = 'http://localhost:3000/api/register';
  private _loginurl = 'http://localhost:3000/api/login';



  constructor(private _http : HttpClient, private _router: Router) { }


  register(userData) {

    return this._http.post<any>(this._registerurl, userData)
  }

  loginUser(userData){
    return this._http.post<any>(this._loginurl, userData)
  }


  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getUserDetails(){
    return localStorage.getItem('userDetails')
  }

  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('userDetails')
    this._router.navigate(['/home'])
  }

}
