import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from "./Pages/tasks/tasks.component";
import { SignupComponent } from "./Pages/signup/signup.component";
import { TasksArchiveComponent } from './Pages/tasks-archive/tasks-archive.component';
import { CalendarioComponent } from './Pages/calendario/Calendario.component';
import { OreComponent } from './Pages/ore/ore.component';
import { ManageUserComponent } from './Pages/manage-user/manage-user.component';
import { OvertimeComponent } from './Pages/overtime/overtime.component';
import { NewsComponent } from "./Pages/news/news.component";

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'archived', component: TasksArchiveComponent },
  { path: 'ore', component: OreComponent },
  { path: 'overtime', component: OvertimeComponent },
  { path: '', redirectTo: '/calendario', pathMatch: 'full' },
  { path: 'users', component: ManageUserComponent },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
