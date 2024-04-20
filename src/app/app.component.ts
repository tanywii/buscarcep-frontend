import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tabela } from './tabela/tabela.component';
import { Pesquisa } from './pesquisa/pesquisa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Pesquisa, Tabela],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetocep-frontend';
}
