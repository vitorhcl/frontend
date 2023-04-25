import { Component } from '@angular/core';
import { Jogo } from '../jogo/jogo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jogos = [
    new Jogo('Resident Evil 4', 'A sobrevivência é apenas o início. Com jogabilidade melhorada, uma história reimaginada e grafismos detalhados, Resident Evil 4 é o renascer de um clássico. Volta a viver o pesadelo que revolucionou os jogos de terror e sobrevivência', '../../assets/resident-evil-4.png'),
    new Jogo('The Witcher 3', 'Você é Geralt de Rívia, mercenário matador de monstros. Você está em um continente devastado pela guerra e infestado de monstros para você explorar à vontade. Sua tarefa é encontrar Ciri, a Criança da Profecia — uma arma viva que pode alterar a forma do mundo', '../../assets/the-witcher-3.jpg'),
    new Jogo('Mad Max', 'Jogue como Mad Max, um sobrevivente e herói relutante. Não há nada que Max queira mais do que deixar a loucura para trás e encontrar um pouco de paz.', '../../assets/mad-max.jpg'),
    new Jogo('DREDGE', 'DREDGE é uma aventura de pescaria para um jogador com um toque sinistro. Venda seu pescado, melhore seu barco e escave as profundezas em busca de segredos antigos. Explore um arquipélago misterioso e descubra por que certas coisas deveriam ser esquecidas', '../../assets/dredge.jpg'),
    new Jogo('Dying Light', 'Um jogo de ação e sobrevivência em primeira pessoa em um mundo aberto pós-apocalíptico tomado por zumbis comedores de carne humana. Atravesse uma cidade devastada por um vírus misterioso. Procure por suprimentos, crie armas e enfrente os infectados', '../../assets/dying-light.jpg'),
    new Jogo('God of War', 'Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo', '../../assets/god-of-war.jpg'),
  ]
}
