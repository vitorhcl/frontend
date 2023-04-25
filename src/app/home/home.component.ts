import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jogos = [
    new Jogo('Resident Evil 4', 'A sobrevivência é apenas o início. Com jogabilidade melhorada, uma história reimaginada e grafismos detalhados, Resident Evil 4 é o renascer de um clássico. Volta a viver o pesadelo que revolucionou os jogos de terror e sobrevivência.', '../../assets/steam.png'),
    new Jogo('The Witcher 3', 'És Geralt of Rivia, um mercenário caçador de monstros. Perante ti, encontras um continente destruído e infestado por monstros, que podes explorar como quiseres. O teu contrato: encontrar Ciri, a Criança da Profecia, uma arma viva capaz de alterar a forma do mundo.', '../../assets/steam.png'),
  ]
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
