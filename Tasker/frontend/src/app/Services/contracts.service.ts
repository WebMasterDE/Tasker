import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment_prod } from '../environment/environtments';
import { Observable } from 'rxjs';
import { Contract } from 'src/Model/Contract_of_employment';
import * as utilities from '../utils/utilities';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  constructor(private http: HttpClient) { }


  getUserContract(userId: number): Observable<Contract> {
    return this.http.get<Contract>(`${environment_prod.BACKEND_URL}/contact/user/${userId}`, utilities.createOptions());
  }
}
