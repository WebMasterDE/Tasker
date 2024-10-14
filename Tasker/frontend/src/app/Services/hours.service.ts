import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hours } from 'src/Model/Hours';
import { environment_prod } from '../environment/environtments'

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  constructor(private http: HttpClient) {
  }

  getHours(id: string) {
    return this.http.get(`${environment_prod.BACKEND_URL}/${id}/hours`);
  }

  addHours(data: Hours) {
    return this.http.post<Hours>(`${environment_prod.BACKEND_URL}/create/hours`, data);
  }

  updateHour(data: Hours, id_hour: number) {
    return this.http.post<Hours>(`${environment_prod.BACKEND_URL}/update/${id_hour}/hour`, data)
  }

  deleteHours(data): Observable<Hours> {
    return this.http.post<Hours>(`${environment_prod.BACKEND_URL}/delete/hours`, data);
  }
}
