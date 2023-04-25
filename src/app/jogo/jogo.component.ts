import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent {
  @Input() jogo!: Jogo;
}

export class Jogo {
  nome: string;
  descricao: string;
  caminhoImagem: string;
  constructor(nome: string, descricao: string, caminhoImagem: string) {
    this.nome = nome;
    this.descricao = descricao;
    this.caminhoImagem = caminhoImagem;
  }
}
