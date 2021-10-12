import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { RegistrationService } from '../app/services/registration.service';

@Injectable()

export class TokenInterceptorService implements HttpInterceptor{

  constructor( private _injector : Injector) { }

  intercept(req, next){
    let authService = this._injector.get(RegistrationService)
    let tokenizedReq = req.clone({
      setHeaders :{
        Authorization : `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
