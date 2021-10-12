import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BibleServiceService {


  private _getUrl = "http://localhost:3000/api/audios";
  constructor(private _http : HttpClient) { }

  getFiles(): Observable <any> {
    return this._http.get<any>(this._getUrl)
            .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }




  getBibleVersions() {
    return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.addEventListener(`readystatechange`, function () {
                    if (this.readyState === this.DONE) {
                        const { data } = JSON.parse(this.responseText);
                            const versions = data.map((data) => {
                                return {
                                        name: data.name,
                                        id: data.id,
                                        abbreviation: data.abbreviation,
                                        description: data.description,
                                        language: data.language.name,
                                        };
                            });
                        resolve(versions);
                    }
             });
            xhr.open(`GET`, `https://api.scripture.api.bible/v1/bibles`);
            xhr.setRequestHeader(`api-key`, '7fb798895cf17c2990de3fac9e95a410');
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
    });
  }
}


