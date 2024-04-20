import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from '../models/user.model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl_register = 'http://127.0.0.1:8000/api/register';
  private apiUrl_login = 'http://127.0.0.1:8000/api/login'
  private apiUrl_User = 'http://127.0.0.1:8000/api/user'
  private apiUrl_Logout = 'http://127.0.0.1:8000/api/logout'


  constructor( private http: HttpClient) { }

  register_user(user:User):Observable<User>{
    
    return this.http.post<User>(this.apiUrl_register,user)
  
  }

  login_user(user:User):Observable<any>{
    
    return this.http.post<any>(this.apiUrl_login, user)

  }

  getUser():Observable<any>{
    const token = localStorage.getItem('jwt');
  
    if(!token){
      return throwError('Unauthorized')
    }

    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.get<any>(this.apiUrl_User, {headers})
  }

  logout_user():Observable<any>{
    return this.http.post<any>(this.apiUrl_Logout,null)
  }

}
