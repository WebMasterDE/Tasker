import { Injectable } from '@angular/core';
import { environment_prod } from '../environment/environtments';
import { HttpClient } from '@angular/common/http';
import { Subtasks } from 'src/Model/Subtasks';

@Injectable({
  providedIn: 'root'
})
export class SubtaskService {

  constructor(private http: HttpClient) { }

  getSubtasks() {
    return this.http.get<any>(`${environment_prod.BACKEND_URL}/get/subtask`);
  }

}
