import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) {
    this._http=_http;
   }
   saveUserProfile(formData: FormData): Observable<any> {
     return this._http.post('http://localhost:8080/saveUserProfileInServer', formData);

   }

  public loginUserFromRemote(user: User): Observable<any>{
    return this._http.post<any>("http://localhost:8080/login", user)


  }
  public registerUserFromRemote(user: User): Observable<any>{
    return this._http.post<any>("http://localhost:8080/registeruser", user)

}
handleError(error: Response){

}
public forgotPasswordFromRemote(user: User): Observable<any>{
  return this._http.post<any>("http://localhost:8080/forgot", user)
}
}
