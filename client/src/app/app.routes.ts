import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'system-settings', pathMatch: 'full'},
  {path: 'control-panel', loadChildren: () => import('./features/control-panel/control-panel.module').then(m => m.ControlPanelModule)},
  {path: 'system-settings', loadChildren: () => import('./features/system-settings/system-settings.module').then(m => m.SystemSettingsModule)},
  {path: '**', redirectTo: 'system-settings'}
];
