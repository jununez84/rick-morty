import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {
    path: 'characters',
    component: CharactersComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
