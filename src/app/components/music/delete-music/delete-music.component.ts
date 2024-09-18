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

  music: Excerpts = {
    id: '',
    content: '',
    author: '',
    card: ''
  }

  constructor(
    private service: ExcerptsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot
  }


}
