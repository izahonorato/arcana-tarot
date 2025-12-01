import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainButton } from "./components/main-button/main-button";
import { HttpClientModule } from '@angular/common/http';
import { TarotService } from './services/tarotAPI.services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainButton, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  protected readonly title = signal('arcana');

  botaoDesativado = true;

  private tarotService = inject(TarotService);

  resposta: string | null = null;
  carregando = false;
  erro: string | null = null;

  revelarCartas(pergunta: string) {
    this.carregando = true;
    this.erro = null;
    this.resposta = null;

    this.tarotService.fazerPergunta(pergunta).subscribe({
      next: (res) => {
        // adapte ao formato da sua API
        this.resposta = res.resultado ?? JSON.stringify(res);
        this.carregando = false;
      },
      error: (e) => {
        console.error(e);
        this.erro = 'Ocorreu um erro ao consultar o oráculo 😅';
        this.carregando = false;
      }
    });
  }

  verificarPergunta(event: any) {
    const texto = event.target.value.trim();
    this.botaoDesativado = texto.length === 0;
  }

  autoResize(event: any) {
    const textarea = event.target;

    textarea.style.height = "auto";           // reseta altura
    textarea.style.height = textarea.scrollHeight + "px";  // ajusta à altura real
  }

  
}

