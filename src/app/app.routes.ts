import { Routes } from '@angular/router';
import { CreateMusicComponent } from './components/music/create-music/create-music.component';
import { ListMusicComponent } from './components/music/list-music/list-music.component';
import { DeleteMusicComponent } from './components/music/delete-music/delete-music.component';
import { EditMusicComponent } from './components/music/edit-music/edit-music.component';

export const routes: Routes = [

  {path: '', redirectTo: 'list-music', pathMatch: 'full'},

  {path: 'create-music', component: CreateMusicComponent},
  {path: 'list-music', component: ListMusicComponent},
  {path: 'music/deleteExcerpt/:id', component: DeleteMusicComponent},
  {path: 'music/editExcerpt/:id', component: EditMusicComponent}
];
