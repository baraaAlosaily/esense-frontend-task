import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html'
})
export class CustomButtonComponent {
  @Input() text!: string;
  @Input() style!: string;
  @Input() icon!: string;

  @Output() onClick = new EventEmitter<void>();


  handleClick(): void {
    this.onClick.emit();
  }
}
