import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import 'rxjs/add/operator/map'
import {map} from 'rxjs/operators'
import { tokenNotExpired } from 'angular2-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:any;
  user:any;
  constructor(private http:HttpClient) { }

  registerUser(user){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(
      'http://localhost:3000/account/reg',
      user,
      {headers:headers});
  }
  authUser(user){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(
      'http://localhost:3000/account/auth',
      user,
      {headers:headers});
  }
  storeUser(token,user){
    localStorage.setItem('token',token);
    localStorage.setItem('user', JSON.stringify(user.id));
    this.token=token;
    this.user=user;
  }
  logout(){
    this.token=null;
    this.user=null;
    localStorage.clear();
  }
  isLogged(){
    return tokenNotExpired();
  }
}
