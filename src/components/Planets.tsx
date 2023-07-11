import React, { useCallback, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Planet, IPlanet } from './Planet';
import { PeopleList } from './PeopleList';
import { CardSkeleton } from './CardSkeleton';
import { OverlayPanel } from './OverlayPanel';

export interface IPlanetResult {
  results: IPlanet[];
  count: number;
  previous: string;
  next: string;
}

export const Planets: React.FC = () => {
  const [url, setUrl] = useState<string>('https://swapi.dev/api/planets/?page=1');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPlanet, setSelectedPlanet] = useState<IPlanet | null>(null);
  const { data: planets, isLoading, error } = useFetch<IPlanetResult>(url);

  // handler planet select
  const handlePlanetSelect = useCallback((planet: IPlanet) => {
    setIsOpen(true);
    setSelectedPlanet(planet);
  }, []);

  // handle Close modal
  const handleClose = useCallback(() => {
    setIsOpen(false);
    setSelectedPlanet(null);
  }, []);

  if (isLoading)
    return (
      <div className="section">
        <CardSkeleton count={10} className="is-full-mobile is-one-fourth-tablet is-one-fifth-desktop" />
      </div>
    );
  if (error) return <>handle Error here</>;

  if (planets && !isLoading) {
    return (
      <div className=" columns is-flex is-align-items-center">
        <div className="column is-one-fourth is-flex is-justify-content-center">
          <button
            className="button is-link is-inverted is-large"
            disabled={!planets?.previous}
            onClick={() => setUrl(planets?.previous)}
          >
            &#8592;
          </button>
        </div>
        <div className="columns is-mobile is-multiline">
          {planets?.results.map((planet: IPlanet) => (
            <div key={planet.url} className="column is-full-mobile is-one-fourth-tablet is-one-fifth-desktop pt-5">
              <Planet planet={planet} onSelectPlanet={handlePlanetSelect} />
            </div>
          ))}
        </div>

        <div className="column is-one-fourth is-flex is-justify-content-center">
          <button
            className="button is-link is-inverted is-large"
            disabled={!planets?.next}
            onClick={() => setUrl(planets.next)}
          >
            &#8594;
          </button>
        </div>
        <OverlayPanel isOpen={isOpen} handleClose={handleClose}>
          {selectedPlanet && <PeopleList residents={selectedPlanet?.residents} planetName={selectedPlanet.name} />}
        </OverlayPanel>
      </div>
    );
  }

  return null;
};
