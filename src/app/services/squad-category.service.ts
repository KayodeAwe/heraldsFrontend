import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ChurchUnitInt } from '../interfaces/church-unit-int';
import { SquadsInt } from '../interfaces/squads-int';

@Injectable({
  providedIn: 'root'
})
export class SquadCategoryService {


  constructor(private http: HttpClient) { }
  private _url : string = "/assets/data/churchUnits.json";
  private _url2 : string = "/assets/data/squadCategories.json";


  getSquad():Observable<SquadsInt[]>{
    return this.http.get<SquadsInt[]>(this._url2)
              .pipe(catchError(this.errorHandler));
  }

  getUnit():Observable<ChurchUnitInt[]>{
    return this.http.get<ChurchUnitInt[]>(this._url)
                .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "server Error");
  }


}
