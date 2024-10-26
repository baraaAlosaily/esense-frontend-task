import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  currentRoute=signal('');
}
