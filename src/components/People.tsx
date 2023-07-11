import { getId } from '../utils';
import { memo, useState, useEffect } from 'react';
import { CardSkeleton } from './CardSkeleton';

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

export const Peoples = ({ residents }: { residents: string[] }) => {
  const [list, setList] = useState<IPeople[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const getAllPeople = async ({ urls }: { urls: string[] }) => {
    setLoading(true);
    const fetchList = urls.map((url) => {
      return fetch(url).then((res) => res.json());
    });
    try {
      const response = await Promise.all(fetchList);
      setList(response);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPeople({ urls: residents });
  }, [residents]);

  if (isLoading) {
    return (
      <div className="section">
        <CardSkeleton count={5} className="is-full-mobile is-one-third-tablet is-one-third-desktop" />
      </div>
    );
  }
  return (
    <div className="columns is-mobile is-multiline">
      {list?.map((item) => (
        <div key={item.created} className="column is-full-mobile is-one-third-tablet is-one-third-desktop">
          <People people={item} />
        </div>
      ))}
    </div>
  );
};
