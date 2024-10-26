import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() currentRoute!: string;
  @Input() mainRoutes!: any[];


  isActiveRoute(route: string): boolean {
    return this.currentRoute.includes(route);
  }
}
