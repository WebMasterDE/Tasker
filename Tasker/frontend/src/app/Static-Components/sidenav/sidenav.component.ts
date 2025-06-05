import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
import { BreakpointObserver } from "@angular/cdk/layout";
import { NavigationEnd, Router } from "@angular/router";
import { User_serviceService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;
  currentRoute: any;
  isCollapsed = true;
  permission: Object = null

  constructor(private observer: BreakpointObserver, private route: Router, private auth: User_serviceService) {
    this.currentRoute = this.route.url;
    this.Authorization();
  }

  ngOnInit() {
    this.observer.observe(['(max-width: 1920px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });

    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.sidenav.close();  // Chiudi la sidenav su navigazione
      }
    });
  }

  Authorization() {
    this.auth.testToken().subscribe({
      next: (res) => {
        this.permission = this.auth.tokenData.authLevel;
        console.log(this.permission);
      },
      error: (err) => {
        this.route.navigate(['/signup']);
      }
    });
  }

  toggleMenu() {
    this.sidenav.toggle();
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['/signup']);
  }

}
