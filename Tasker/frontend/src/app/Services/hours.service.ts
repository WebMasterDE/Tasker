import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hours } from 'src/Model/Hours';
import { environment_prod } from '../environment/environtments'
import * as utilities from '../utils/utilities';


@Injectable({
  providedIn: 'root'
})
export class HoursService {

  constructor(private http: HttpClient) {
  }

  getHours(userId: number) {
    return this.http.get(`${environment_prod.BACKEND_URL}/hours/user/${userId}`, utilities.createOptions());
  }

  getAllHours() {
    return this.http.get(`${environment_prod.BACKEND_URL}/hours`, utilities.createOptions())
  }

  addHours(data: Hours) {
    return this.http.post<Hours>(`${environment_prod.BACKEND_URL}/hour`, data, utilities.createOptions());
  }

  updateHour(data: Hours, hourId: number) {
    return this.http.put<Hours>(`${environment_prod.BACKEND_URL}/hour/${hourId}`, data, utilities.createOptions())
  }

  deleteHours(hourId: number): Observable<any> {
    return this.http.delete<any>(`${environment_prod.BACKEND_URL}/hour/${hourId}`, utilities.createOptions());
  }

  getLastId(): Observable<Hours> {
    return this.http.get<Hours>(`${environment_prod.BACKEND_URL}/get/last_id_hour`, utilities.createOptions())
  }
}
