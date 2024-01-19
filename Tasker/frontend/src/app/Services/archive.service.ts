import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Archive } from 'src/Model/Archive';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  constructor(private http: HttpClient) { }

  getTasksArchive(id_user: number): Observable<Archive[]> {
    return this.http.get<Archive[]>(`http://localhost:3000/api/archive/${id_user}`);
  }
  insertTasksArchive(data: Archive, id_task: number, id_user: number): Observable<Archive> {
    return this.http.post<Archive>(`http://localhost:3000/api/archive/${id_task}/${id_user}`, data);
  }
}
