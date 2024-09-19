import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from "./Pages/tasks/tasks.component";
import { SignupComponent } from "./Pages/signup/signup.component";
import { TasksArchiveComponent } from './Pages/tasks-archive/tasks-archive.component';
import { CalendarioComponent } from './Pages/calendario/calendario.component';
import { OreComponent } from './Pages/ore/ore.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'archived', component: TasksArchiveComponent },
  { path: 'ore', component: OreComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
