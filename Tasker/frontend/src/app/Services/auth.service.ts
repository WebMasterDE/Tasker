import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";
import { User } from "../../Model/User"
import { Logindata } from "../../Model/Logindata";
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment_prod } from '../environment/environtments';
import { jwtDecode } from "jwt-decode";
import { LoginResponse, TokenData } from 'src/Model/types';
import * as utilities from '../utils/utilities';


@Injectable({
    providedIn: 'root'
})
export class User_serviceService {

    user: User;
    tokenData: TokenData;

    constructor(private _http: HttpClient, private snack: MatSnackBar) {
    }

    // GET  user by id
    getUser(userId: string): Observable<User> {
        return this._http.get<User>(`${environment_prod.BACKEND_URL}/user/${userId}`, utilities.createOptions());
    }

    //GET all users
    getAllUsers(): Observable<User[]> {
        return this._http.get<User[]>(`${environment_prod.BACKEND_URL}/users`, utilities.createOptions())
    }

    // POST send data to backend for registration
    sendUser(data): Observable<User> {
        return this._http.post<User>(`${environment_prod.BACKEND_URL}/user/auth/signup`, data, utilities.createOptions())
    }

    // GET retrive the token from login
    login(mail: string, password: string): Observable<LoginResponse> {
        let options = {
            headers: new HttpHeaders({
                "Authorization": "Basic " + btoa(mail + ":" + password),
                'cache-control': 'no-cache',
            })
        };

        return this._http.get<LoginResponse>(
            `${environment_prod.BACKEND_URL}/login`,
            options
        ).pipe(
            tap((res: LoginResponse) => {
                if (res) {
                    localStorage.setItem("token", res.token);
                    this.tokenData = jwtDecode<TokenData>(res.token);
                }
            }),
            catchError(error => {
                //TODO: Gestire l'errore in modo appropriato

                // Propaga l'errore al chiamante
                return throwError(() => error);
            })
        );
    }

    IsloggedIn(): boolean {
        let getsessionstorage = localStorage.getItem("token");
        if (getsessionstorage != null) {
            this.tokenData = jwtDecode<TokenData>(getsessionstorage);
            return true
        } else {
            return false
        }
    }



    // changePassword(newpass: string, id: string) {
    //     try {
    //         let changepsw = this._http.post(`${environment_prod.BACKEND_URL}/change/password/user/${id}`, { pass: newpass }).subscribe(val => {

    //         }, error => {
    //             console.log('errore nel cambio password')
    //         })
    //         this.snack.open('Password cambiata correttamente!')
    //         return changepsw
    //     } catch (err) {
    //         return console.log(err)
    //     }
    // }
}

