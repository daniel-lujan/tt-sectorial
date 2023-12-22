import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() type: string = 'button';
  @Input() classes: string = '';

  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}
