import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  permission: Object;
  constructor(private observer: BreakpointObserver, private route: Router, private auth: User_serviceService) {
    this.currentRoute = this.route.url
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
      }
    });
    this.Authorization()
  }

  Authorization() {
    let id = JSON.parse(localStorage.getItem('data'))
    let value;
    this.auth.userAuthorization(id.id).subscribe((val) => {
      value = val

      return this.permission = value.Autorizzazione
    })
  }

  toggleMenu() {

    this.sidenav.toggle(); // On desktop/tablet, toggle the menu
    this.isCollapsed = !this.isCollapsed;

  }

  logout() {
    this.route.navigate(['/signup'])
    localStorage.removeItem('data')
  }

}
