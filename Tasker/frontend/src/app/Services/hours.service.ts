import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hours } from 'src/Model/Hours';

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  constructor(private http: HttpClient) { }

  getHours(id: string) {
    return this.http.get<Hours[]>(`http://localhost:3000/api/${id}/hours`);
  }

  addHours(data: Hours) {
    return this.http.post<Hours>(`http://localhost:3000/api/create/hours`, data);
  }

  deleteHours(data): Observable<Hours> {
    return this.http.post<Hours>(`http://localhost:3000/api/delete/hours`, data);
  }
}
