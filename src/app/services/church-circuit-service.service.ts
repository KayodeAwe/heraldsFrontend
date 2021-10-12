import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from "rxjs";
import { Church } from '../interfaces/church';

@Injectable({
  providedIn: 'root'
})
export class ChurchCircuitServiceService {

  private _getUrl = "http://localhost:3000/api/circuits";
  private _postUrl = "http://localhost:3000/api/circuit";
  private _putUrl = "http://localhost:3000/api/circuit/";
  private _deleteUrl = "http://localhost:3000/api/circuit/";

  constructor(private _http : HttpClient) { }


  getFiles(): Observable < Church[] > {
    return this._http.get< Church[] >(this._getUrl)
            .pipe(catchError(this.errorHandler));
  }

  addCircuit(church : any){
    return this._http.post<any>(this._postUrl, church)
              .pipe(catchError(this.errorHandler))
  }

  updateCircuit( church : Church){
    return this._http.put(this._putUrl+church._id, church)
                .pipe(catchError(this.errorHandler))
  }

  deleteCircuit( church : Church){
    return this._http.delete(this._deleteUrl+church._id)
              .pipe(catchError(this.errorHandler))
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }


}
