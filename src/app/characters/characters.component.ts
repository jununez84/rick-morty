import { Component, OnInit } from '@angular/core';
import { Character } from '../core/models/character';
import { RickandmortyService } from '../core/services/rickandmorty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Character[];
  activo: boolean;

  constructor(private service: RickandmortyService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.service.getCharacters().subscribe((response) => {
      this.characters = response;
    });
  }

  onClick() {
    console.log('activo');
    this.activo = true;
  }
}
