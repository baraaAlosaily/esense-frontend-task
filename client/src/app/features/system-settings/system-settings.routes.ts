import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CustomersComponent } from './components/customers/customers.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent ,
    children: [
      {path:'', redirectTo: 'clients', pathMatch: 'full'},
      {path: 'clients', component: ClientsComponent},
      {path: 'customers', component: CustomersComponent},
    ]
  },
];
