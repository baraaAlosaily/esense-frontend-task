import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { filter } from 'rxjs';
import { RoutingService } from './core/services/routing/routing.service';
import { ApiService } from './core/services/api/api.service';
import { IMainRoute } from './interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SharedModule],
  providers:[RoutingService,ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  router=inject(Router);
  route=inject(ActivatedRoute)
  currRoute=inject(RoutingService)

  // avatar input
  avatar: string='assets/images/avatar.jpg';
  name: string='شريف محمد';
  title: string='السجلات';
  currentRoute: string = '';
  mainRoutes:IMainRoute[]=[
    {title: 'اعدادات النظام', path: '/system-settings'},
    {title: 'لوحة القيادة', path: '/control-panel'},
  ]

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
        this.currRoute.currentRoute.set(event.urlAfterRedirects);
    });
  }
}
