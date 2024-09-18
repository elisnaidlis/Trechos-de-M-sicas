import { Component, Input } from '@angular/core';
import {NgClass} from '@angular/common';
import { Excerpts } from '../excerpts';


@Component({
  selector: 'app-music-excerpts',
  standalone: true,
  imports: [NgClass],
  templateUrl: './music-excerpts.component.html',
  styleUrl: './music-excerpts.component.css'
})
export class MusicExcerptsComponent {

  @Input() excerpts: Excerpts = {
    id: 0,
    content: 'I love Angular',
    author: 'Elis',
    card: 'card_1'
  };

  //Se o trecho de música for maior que 266 caracteres, retorna a classe excerpts-g
  widthExcerpts(): string {
    if(this.excerpts.content.length >= 256) {
      return 'excerpts-g'
    }
    return 'excerpts-p'
  }

}
