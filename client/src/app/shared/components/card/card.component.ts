import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() element: any;

  @Output() allActions=new EventEmitter();

  editEvent(element: any){
    this.allActions.emit({action: 'edit', data: element})
  }
  deleteEvent(element: any){
    this.allActions.emit({action: 'delete', data: element})
  }
}
