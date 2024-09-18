import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MusicExcerptsComponent } from '../music-excerpts/music-excerpts.component';
import { CommonModule } from '@angular/common';
import { Excerpts } from '../excerpts';
import { ExcerptsService } from '../excerpts.service';

@Component({
  selector: 'app-list-music',
  standalone: true,
  imports: [ CommonModule, RouterLink, MusicExcerptsComponent ],
  templateUrl: './list-music.component.html',
  styleUrl: './list-music.component.css'
})
export class ListMusicComponent implements OnInit {

  listMusic: Excerpts[] = [];

  //Consumindo o serviço
  constructor(private service: ExcerptsService) {}

  //Configuração do ciclo de vida do componente
  ngOnInit(): void {
    this.service.list().subscribe((listMusic) => {
      this.listMusic = listMusic
    })
  }
}

