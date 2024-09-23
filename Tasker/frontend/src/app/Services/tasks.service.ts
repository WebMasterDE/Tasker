import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Task } from "../../Model/Task";
import { Observable } from "rxjs";
import { environment_prod } from '../environment/environtments'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  getAllTasks = []
  constructor(private http: HttpClient) { }

  GetTasksUser(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment_prod.BACKEND_URL}/get/tasks`)
  }

  DeleteTaskUser(data): Observable<Task> {
    return this.http.post<Task>(`${environment_prod.BACKEND_URL}/tasks/delete`, data)
  }

  CreateTaskUser(data): Observable<Task> {
    return this.http.post<Task>(`${environment_prod.BACKEND_URL}/tasks/create`, data)
  }
}
