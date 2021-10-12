import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegistrationService } from './services/registration.service';

//@Injectable({
  //providedIn: 'root'
//})

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private _authService : RegistrationService,
              private _router : Router){}

  canActivate(): boolean{
    if(this._authService.loggedIn()){
      return true;
    } else {
        this._router.navigate(['/login'])
        return false;
    }
  }

}
