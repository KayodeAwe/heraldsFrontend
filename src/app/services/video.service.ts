import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Video } from '../interfaces/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = "http://localhost:3000/api/videos";
  private _postUrl = "http://localhost:3000/api/video";
  private _putUrl = "http://localhost:3000/api/video/";
  private _deleteUrl = "http://localhost:3000/api/video/";

  constructor(private _http : HttpClient) { }

  getVideos() : Observable <Video[]> {
    return this._http.get<Video[]>(this._getUrl)
    .pipe(catchError(this.errorHandler));
  }

  addVideo(video : any){
    return this._http.post<any>(this._postUrl, video)
              .pipe(catchError(this.errorHandler))
  }

  updateVideo(video: Video){
    return this._http.put(this._putUrl+video._id, video)
            .pipe(catchError(this.errorHandler));
  }

  deleteVideo(video : Video){
    return this._http.delete(this._deleteUrl+video._id)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse) {
    return throwError(error.message || "server Error")
  }
}
