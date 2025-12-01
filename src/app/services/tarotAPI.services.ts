import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface RespostaTarot {
  // ajusta isso pro formato real da sua API
  resultado: string;
  cartas?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class TarotService {

  private apiUrl = 'https://tarotapi.dev/api/v1/cards/random?n=3'; // 👈 troque pela URL real

  constructor(private http: HttpClient) {}

  fazerPergunta(pergunta: string): Observable<RespostaTarot> {
    // POST – se sua API for GET é só trocar
    return this.http.post<RespostaTarot>(this.apiUrl, { pergunta });
  }
}