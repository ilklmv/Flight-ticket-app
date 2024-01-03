import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSortKey,
  setSortOrder,
  addAirlineFilter,
  removeAirlineFilter,
  addStopFilter,
  removeStopFilter,
} from '../app/flightsSlice';
import { RootState } from '../app/store';
import { Flight } from './flightList';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const sortKey = useSelector((state: RootState) => state.flights.sortKey);
  const sortOrder = useSelector((state: RootState) => state.flights.sortOrder);
  const airlineFilters = useSelector((state: RootState) => state.flights.filters.airline);
  const stopsFilters = useSelector((state: RootState) => state.flights.filters.stops);

  const handleSortChange = (key: keyof Flight) => {
    dispatch(setSortKey(key));
    dispatch(setSortOrder(sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleAirlineFilterChange = (airline: string) => {
    if (airlineFilters.includes(airline)) {
      dispatch(removeAirlineFilter(airline));
    } else {
      dispatch(addAirlineFilter(airline));
    }
  };

  const handleStopsFilterChange = (stops: number) => {
    if (stopsFilters.includes(stops)) {
      dispatch(removeStopFilter(stops));
    } else {
      dispatch(addStopFilter(stops));
    }
  };

  return (
    <div>
      <h2>Фильтры</h2>
      <div>
        <label>
          Сортировка по:
          <select value={sortKey || ''} onChange={(e) => handleSortChange(e.target.value as keyof Flight)}>
            <option value="price">Цене</option>
            <option value="duration">Длительности</option>
            <option value="stops">Пересадкам</option>
          </select>
        </label>
        <label>
          Порядок сортировки:
          <select value={sortOrder} onChange={(e) => dispatch(setSortOrder(e.target.value as 'asc' | 'desc'))}>
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
        </label>
      </div>
      <div>
        <h3>Фильтр по авиакомпаниям</h3>
        {airlineFilters.map((airline) => (
          <label key={airline}>
            <input
              type="checkbox"
              checked={true}
              onChange={() => handleAirlineFilterChange(airline)}
            />
            {airline}
          </label>
        ))}
      </div>
      <div>
        <h3>Фильтр по пересадкам</h3>
        {[0, 1, 2, 3].map((stops) => (
          <label key={stops}>
            <input
              type="checkbox"
              checked={stopsFilters.includes(stops)}
              onChange={() => handleStopsFilterChange(stops)}
            />
            {stops === 0 ? 'Без пересадок' : `${stops} пересадки`}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
