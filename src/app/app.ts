import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainButton } from "./components/main-button/main-button";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('arcana');
}
