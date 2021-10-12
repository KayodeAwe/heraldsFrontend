import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdditionalDetailsService {

  private _getdashboardurl = 'http://localhost:3000/api/getdetails';

  private _additionalDetails = 'http://localhost:3000/api/profile';

  private _updateUserUrl = 'http://localhost:3000/api/update';

  constructor(private _http: HttpClient) { }

  //Registration Component uses this function to post registration data
  profileDetails(userData){
    return this._http.post<any>(this._additionalDetails, userData)
  }

  //Members-Dashboard uses this to fetch other data
  getInfoUsers(userMail){
    return this._http.post<any>(this._getdashboardurl, userMail)
  }

  //Update user info in Members-Dashboard
  updateUserInfo(UpdatedData){
    return this._http.post<any>(this._updateUserUrl, UpdatedData)
  }

}
