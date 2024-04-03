import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from "./Pages/tasks/tasks.component";
import { SignupComponent } from "./Pages/signup/signup.component";
import { TasksArchiveComponent } from './Pages/tasks-archive/tasks-archive.component';
import { HomeComponent } from './Pages/home/home.component';
import { OreComponent } from './Pages/ore/ore.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
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
