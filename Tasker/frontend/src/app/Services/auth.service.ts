import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../Model/User"
import { Logindata } from "../../Model/Logindata";
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment_prod } from '../environment/environtments'

@Injectable({
  providedIn: 'root'
})
export class User_serviceService {

  constructor(private _http: HttpClient, private snack: MatSnackBar) {
  }

  // GET  user by id
  getUser(id: string): Observable<User> {
    return this._http.get<User>(`${environment_prod.BACKEND_URL}/${id}/user`);
  }

  //GET all users
  getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${environment_prod.BACKEND_URL}/get/users`)
  }

  // POST send data to backend for registration
  sendUser(data): Observable<User> {
    return this._http.post<User>(`${environment_prod.BACKEND_URL}/user/auth/signup`, data)
  }

  // POST retrive the token from login
  loginUser(data) {
    return this._http.post<Logindata>(`${environment_prod.BACKEND_URL}/user/auth/login`, data)
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
    let oo = this._http.get<Object>(`${environment_prod.BACKEND_URL}/authorization/${id}/user`);
    return oo
  }

  changePassword(newpass: string, id: string) {
    try {
      let changepsw = this._http.post(`${environment_prod.BACKEND_URL}/change/password/user/${id}`, { pass: newpass }).subscribe(val => {

      }, error => {
        console.log('errore nel cambio password')
      })
      this.snack.open('Password cambiata correttamente!')
      return changepsw
    } catch (err) {
      return console.log(err)
    }
  }
}

