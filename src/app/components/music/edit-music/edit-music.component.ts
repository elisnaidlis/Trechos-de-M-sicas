import { Component, OnInit } from '@angular/core';
import { Excerpts } from '../excerpts';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExcerptsService } from '../excerpts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-music',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-music.component.html',
  styleUrl: './edit-music.component.css'
})
export class EditMusicComponent implements OnInit {

  editExcerpts: Excerpts = {
    id: '',
    content: '',
    author: '',
    card: ''
  }

  constructor(
    private service: ExcerptsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.searchById((id!)).subscribe((editExcerpts) => {
      this.editExcerpts = editExcerpts
    })
  }

  editMusic() {
    this.service.edit(this.editExcerpts).subscribe(() => {
      this.router.navigate(['/list-music'])
    })

  }

  cancelMusic() {
    this.router.navigate(['/list-music'])
  }
}
