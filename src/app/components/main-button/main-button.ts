import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  imports: [],
  templateUrl: './main-button.html',
  styleUrl: './main-button.css',
})
export class MainButton {
  @Input() descBotao: string = '';
  @Input() disabled: boolean = false;

}
