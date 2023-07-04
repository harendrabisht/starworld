import { getId } from '../utils';
import { memo } from 'react';

export interface IPeople {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

const imgURL = 'https://starwars-visualguide.com/assets/img/characters/';

export const People = memo(({ people }: { people: IPeople }) => {
  const peopleId = getId(people.url);

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <picture>
            <source srcSet={`${imgURL}${peopleId}.jpg`}></source>
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt={people?.name} />
          </picture>
        </figure>
      </div>
      <div className="card-content">
        <ul>
          <li className="is-uppercase">{people?.name}</li>
        </ul>
      </div>
    </div>
  );
});
