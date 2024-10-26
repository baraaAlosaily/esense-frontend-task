import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-found',
  templateUrl: './no-data-found.component.html'
})
export class NoDataFoundComponent {
  @Input() message!: string;
  @Input() image!: string;
}
