import { useEffect, useState } from 'react';
import { People, IPeople } from './People';
import { CardSkeleton } from './CardSkeleton';

export interface IPeopleList {
  residents: string[];
  planetName: string;
}
export const PeopleList = ({ residents, planetName }: IPeopleList) => {
  const [list, setList] = useState<IPeople[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getAllPeople = async () => {
    setLoading(true);
    const fetchList = residents.map((url) => {
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
    getAllPeople();
  }, []);

  if (isLoading) {
    return (
      <div className="section">
        <CardSkeleton count={5} className="is-full-mobile is-one-third-tablet is-one-third-desktop" />
      </div>
    );
  }

  return (
    <div className="section">
      <h2 className="is-size-2 title is-2">Residents of {planetName}</h2>
      {residents.length === 0 ? (
        <div className="content is-size-3"> No one live in this planet </div>
      ) : (
        <div className="columns is-mobile is-multiline">
          {list?.map((item) => (
            <div className="column is-full-mobile is-one-third-tablet is-one-third-desktop">
              <People people={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
