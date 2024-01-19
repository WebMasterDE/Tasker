import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from "./Pages/tasks/tasks.component";
import { SignupComponent } from "./Pages/signup/signup.component";
import { TasksArchiveComponent } from './Pages/tasks-archive/tasks-archive.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'archived', component: TasksArchiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
