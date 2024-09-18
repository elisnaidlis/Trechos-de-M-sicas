import { Excerpts } from './../excerpts';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ExcerptsService } from '../excerpts.service';

@Component({
  selector: 'app-create-music',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './create-music.component.html',
  styleUrl: './create-music.component.css'
})
export class CreateMusicComponent {

  music: Excerpts = {
    content: '',
    author: '',
    card: 'card_1'
  }

  //Consumindo o serviço
  constructor(
    private service: ExcerptsService,
    private router: Router
  ) { }

  createMusic() {
    this.service.create(this.music).subscribe(() => {
      this.router.navigate(['/list-music'])
    })
  }

  cancelMusic() {
      this.router.navigate(['/list-music'])
  }
}
