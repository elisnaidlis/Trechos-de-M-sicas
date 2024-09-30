import { Component, OnInit } from '@angular/core';
import { Excerpts } from '../excerpts';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcerptsService } from '../excerpts.service';

@Component({
  selector: 'app-delete-music',
  standalone: true,
  imports: [],
  templateUrl: './delete-music.component.html',
  styleUrl: './delete-music.component.css'
})
export class DeleteMusicComponent implements OnInit  {

  deleteMusic: Excerpts = {
    id: '',
    content: '',
    author: '',
    card: ''
  }

  constructor(
    private service: ExcerptsService,
    private router: Router,  //Para fazer o redirecio
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.searchById((id!)).subscribe((deleteMusic) => {
      this.deleteMusic = deleteMusic
    })
  }

  deleteExcerpt() {
    if(this.deleteMusic.id) {
      this.service.delete(this.deleteMusic.id).subscribe(() => {
        this.router.navigate(['/list-music'])
      })
    }
  }

  cancel() {
    this.router.navigate(['/list-music'])
  }
}
