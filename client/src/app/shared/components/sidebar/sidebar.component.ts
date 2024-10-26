import { Component, Input, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoutingService } from '../../../core/services/routing/routing.service';
import { ISubRoute } from '../../../interfaces/sub-route.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  router=inject(Router);
  route=inject(ActivatedRoute)
  currRoute=inject(RoutingService);

  @Input() currentRoute!: string;
  @Input() subRoute!:ISubRoute[];
  @Input() title!: string

  isActiveRoute(route: string): boolean {
    this.currentRoute = this.currRoute.currentRoute();
    return this.currentRoute.includes(route);
  }
}
