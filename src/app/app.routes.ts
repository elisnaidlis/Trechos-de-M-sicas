import { Routes } from '@angular/router';
import { CreateMusicComponent } from './components/music/create-music/create-music.component';
import { ListMusicComponent } from './components/music/list-music/list-music.component';

export const routes: Routes = [

  {path: '', redirectTo: 'list-music', pathMatch: 'full'},

  {path: 'create-music', component: CreateMusicComponent},
  {path: 'list-music', component: ListMusicComponent}
  
];
