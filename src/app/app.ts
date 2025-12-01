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

    botaoDesativado = true;

  verificarPergunta(event: any) {
    const texto = event.target.value.trim();
    this.botaoDesativado = texto.length === 0;
  }

  autoResize(event: any) {
  const textarea = event.target;

  textarea.style.height = "auto";           // reseta altura
  textarea.style.height = textarea.scrollHeight + "px";  // ajusta à altura real
}

  revelarCartas() {
    console.log("Botão foi clicado!");
}
}

