import { ISubRoute } from './../../../../interfaces/sub-route.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  currentRoute: string = '';
  title='ادارة المعاملات'

  subRoute:ISubRoute[]=[
    {title:'مجموعة المستلمين الجهات الخارجية',path:'clients'},
    {title:'مجموعة العملاء الجهات الداخلية',path:'customers'},
  ]

}
