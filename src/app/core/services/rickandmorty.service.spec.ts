import { fakeAsync, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { RickandmortyService } from './rickandmorty.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Character } from '../models/character';

import { default as charactersData } from '../../../test/characters.mock.json';

describe('RickandmortyService', () => {
  let service: RickandmortyService;

  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RickandmortyService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RickandmortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tests for getCharacters', () => {
    it('should return a list of characters', fakeAsync(() => {
      let responseData: Character[];

      service
        .getCharacters()
        .subscribe((response: any) => (responseData = response));

      const req = httpTestingController.expectOne(
        `${environment.api}character/`
      );

      req.flush(charactersData);

      expect(responseData.length).toEqual(3);
      httpTestingController.verify();
    }));
  });
});
