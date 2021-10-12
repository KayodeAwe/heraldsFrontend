import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { of } from "rxjs";

import { AudioIt } from "../interfaces/audio-it";

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private _getUrl = "http://localhost:3000/api/audios";
  private _postUrl = "http://localhost:3000/api/audio";
  private _putUrl = "http://localhost:3000/api/audio/";
  private _deleteUrl = "http://localhost:3000/api/audio/";

  constructor(private _http : HttpClient) { }

  getFiles(): Observable < AudioIt[] > {
    return this._http.get< AudioIt[] >(this._getUrl)
            .pipe(catchError(this.errorHandler));
  }

  addAudio(audio : any){
    return this._http.post<any>(this._postUrl, audio)
              .pipe(catchError(this.errorHandler))
  }

  updateAudio( audio : AudioIt){
    return this._http.put(this._putUrl+audio._id, audio)
                .pipe(catchError(this.errorHandler))
  }

  deleteAudio( audio : AudioIt){
    return this._http.delete(this._deleteUrl+audio._id)
              .pipe(catchError(this.errorHandler))
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }


}

