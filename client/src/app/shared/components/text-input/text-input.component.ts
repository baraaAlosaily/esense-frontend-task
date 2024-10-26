import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html'
})
export class TextInputComponent {
  @Input() inputValue: string='';
  @Output() inputValueChange = new EventEmitter<string>();

  onModelChange($event:string): void {
    this.inputValueChange.emit($event);
  }
}
