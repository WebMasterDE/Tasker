import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../Model/User"
import { Logindata } from "../../Model/Logindata";

@Injectable({
  providedIn: 'root'
})
export class User_serviceService {

  constructor(private _http: HttpClient) {
  }

  // GET  user by id
  getUser(id: string): Observable<User> {
    return this._http.get<User>(`http://localhost:3000/api/${id}/user`);
  }

  //GET all users
  getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>('http://localhost:3000/api/get/users')
  }

  // POST send data to backend for registration
  sendUser(data): Observable<User> {
    return this._http.post<User>("http://localhost:3000/api/user/auth/signup", data)
  }

  // POST retrive the token from login
  loginUser(data) {
    return this._http.post<Logindata>('http://localhost:3000/api/user/auth/login', data)
  }

  IsloggedIn(): boolean {
    let getsessionstorage = JSON.parse(localStorage.getItem("data"));
    if (getsessionstorage != null) {
      return true
    } else {
      return false
    }
  }
  userAuthorization(id: string): Observable<Object> {
    let oo = this._http.get<Object>(`http://localhost:3000/api/authorization/${id}/user`);
    return oo
  }

  changePassword(newpass: string, id: string) {
    try {
      return this._http.post(`http://localhost:3000/api/change/password/user/${id}`, { pass: newpass }).subscribe()
    } catch (err) {
      return console.log(err)
    }
  }
}

