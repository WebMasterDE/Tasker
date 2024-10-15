import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './Static-Components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from "@angular/material/list";
import { HttpClientModule } from "@angular/common/http";
import { TasksComponent } from './Pages/tasks/tasks.component';
import { TableComponent } from './Static-Components/table/table.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { TasksArchiveComponent } from './Pages/tasks-archive/tasks-archive.component';
import { CalendarioComponent } from './Pages/calendario/Calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { OreComponent } from './Pages/ore/ore.component';
import { TasksDialogComponent } from './Static-Components/tasks-dialog/tasks-dialog.component';
import { WindowDialogComponent } from './Static-Components/window-dialog/window-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from './Services/loading.service';
import { SpinnerComponent } from "./utils/spinner/spinner.component";
import { MatTabsModule } from '@angular/material/tabs';
import { ManageUserComponent } from './Pages/manage-user/manage-user.component';
import { UsersTableComponent } from './Static-Components/users-table/users-table.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OvertimeComponent } from './Pages/overtime/overtime.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TasksComponent,
    SignupComponent,
    TasksArchiveComponent,
    CalendarioComponent,
    OreComponent,
    TasksDialogComponent,
    WindowDialogComponent,
    ManageUserComponent,
    OvertimeComponent,
  ],
  imports: [
    TableComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatTableModule,
    MatDialogModule,
    FullCalendarModule,
    MatProgressSpinnerModule,
    SpinnerComponent,
    MatTabsModule,
    UsersTableComponent,
    MatButtonModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatBottomSheetModule,

  ],
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
