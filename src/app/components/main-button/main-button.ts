import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-button',
  imports: [],
  templateUrl: './main-button.html',
  styleUrl: './main-button.css',
})
export class MainButton {
  @Input() descBotao: string = '';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
