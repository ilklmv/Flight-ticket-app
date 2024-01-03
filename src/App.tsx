import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from './app/flightsSlice';
import Header from './components/header';
import Filters from './components/filters';
import FlightList from './components/flightList';
import LoadMoreButton from './components/loadMoreButton';
import store, { RootState } from './app/store';
import FilterPanel from './filterPanel';
import RadioPanel from './radioPanel';

const App: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
  const flights = useSelector((state: RootState) => state.flights.flights);

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);  

  return (
    <Provider store={store}>
      <Header />
      <Filters />
      <FlightList flights={flights} />
      <LoadMoreButton onClick={() => {}} />
      <FilterPanel />
      <RadioPanel />
    </Provider>
  );
};

export default App;