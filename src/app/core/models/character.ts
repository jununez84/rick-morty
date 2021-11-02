import { Gender } from './gender';
import { CharacterStatus } from './character-status';
import { Episode } from './episode';
import { Location } from './location';

export class Character {
  id: number;
  name: string;
  status: CharacterStatus | string;
  species: string;
  gender: Gender | string;
  location: Location | {};
  image: string;
  episode: Episode[] | string[];
}
