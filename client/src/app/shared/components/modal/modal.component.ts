import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
 @Input() modalTitle!: string;
 @Input() nameForm!: any;
 @Output() allActions = new EventEmitter<any>();

 saveEvent(title: string){
    this.allActions.emit({action: 'save', data: title})
 }
 closeModalEvent(){
    this.allActions.emit({action: 'close', data: ''})
 }
}
