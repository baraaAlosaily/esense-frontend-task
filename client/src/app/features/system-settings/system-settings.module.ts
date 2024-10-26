import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemSettingsRoutingModule } from './system-settings-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClientsComponent,CustomersComponent,DashboardComponent],
  imports: [
    CommonModule,
    SystemSettingsRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
]
})
export class SystemSettingsModule { }
