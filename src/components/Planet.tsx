import { memo } from 'react';
import { getId } from '../utils';

export type IPlanet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: any[];
  films: string[];
  created: string;
  edited: string;
  url: string;
  planetId?: string;
};

const imgURL = 'https://starwars-visualguide.com/assets/img/planets/';

export const Planet = memo(
  ({ planet, onSelectPlanet }: { planet: IPlanet; onSelectPlanet: (planet: IPlanet) => void }) => {
    const { name, url } = planet;
    const planetId = getId(url);

    const handleOnSelectPlanet = () => {
      onSelectPlanet(planet);
    };

    return (
      <div className="card mt-5">
        <div className="card-image">
          <figure className="image is-4by3">
            <picture>
              <source srcSet={`${imgURL}${planetId}.jpg`}></source>
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt={name} loading="lazy" />
            </picture>
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <div className="title is-4">{name}</div>
          </div>
        </div>
        <div className="card-footer">
          <button className="button is-fullwidth is-info" onClick={handleOnSelectPlanet}>
            See People
          </button>
        </div>
      </div>
    );
  },
);
