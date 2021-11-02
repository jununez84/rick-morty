import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { RickandmortyService } from '../core/services/rickandmorty.service';

import { CharactersComponent } from './characters.component';
import * as charactersData from '../../test/characters.mock.json';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  let service = jasmine.createSpyObj('RickandmortyService', ['getCharacters']);
  let getCharactersSpy: jasmine.SpyObj<RickandmortyService>;

  beforeEach(async(() => {
    getCharactersSpy = service.getCharacters.and.returnValue(
      of(charactersData.results)
    );

    TestBed.configureTestingModule({
      declarations: [CharactersComponent],
      providers: [{ provide: RickandmortyService, useValue: service }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tests for getCharacters', fakeAsync(() => {
    component.getCharacters();
    expect(getCharactersSpy).toHaveBeenCalled();
  }));

  it('testing dom', () => {
    const el: HTMLElement = fixture.nativeElement;
    const img: HTMLImageElement = el.querySelector('img') as HTMLImageElement;

    console.log('el', el);
    console.log('img', img);

    console.log('activo', component.activo);
    img.click();
    console.log('activo', component.activo);
  });
});
