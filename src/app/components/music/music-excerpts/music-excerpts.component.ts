import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Excerpts } from '../excerpts';
import { DeleteMusicComponent } from '../delete-music/delete-music.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-music-excerpts',
  standalone: true,
  imports: [NgClass, DeleteMusicComponent, RouterLink],
  templateUrl: './music-excerpts.component.html',
  styleUrl: './music-excerpts.component.css'
})
export class MusicExcerptsComponent {

  @Input() musicExcerpts: Excerpts = {
    id: '',
    content: '',
    author: '',
    card: ''
  };

  //Se o trecho de música for maior que 266 caracteres, retorna a classe excerpts-g
  widthExcerpts(): string {
    if(this.musicExcerpts.content.length >= 256) {
      return 'excerpts-g'
    }
    return 'excerpts-p'
  }

}
