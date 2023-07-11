import { useCallback, useEffect, useState } from 'react';
import { Peoples } from './People';
import { Pagination } from './Pagination';
const PAGE_SIZE = 5;

export interface IPeopleList {
  residents: string[];
  planetName: string;
}
export const PeopleList = ({ residents = [], planetName }: IPeopleList) => {
  const [filteredList, setFilteredList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const newList = residents.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
    setFilteredList(newList);
  }, [residents, setFilteredList, currentPage]);

  /** Handle Paging when use click on any button */
  const handlePaging = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [setCurrentPage],
  );

  return (
    <div className="section">
      <h2 className="is-size-2 title is-2">Residents of {planetName}</h2>
      {filteredList.length === 0 ? (
        <div className="content is-size-3"> No one live in this planet </div>
      ) : (
        <Peoples residents={filteredList} />
      )}
      {residents.length > 0 && <Pagination list={residents} pageSize={PAGE_SIZE} handleClick={handlePaging} />}
    </div>
  );
};
