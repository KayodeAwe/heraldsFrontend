import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesDataServiceService {

  constructor(private http: HttpClient) { }

  private _url : string = "/assets/data/countriesState.json";


  getCountry():Observable<Array<any>>{
    return this.http.get<Array<any>>(this._url)
                .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "server Error");
  }
}
