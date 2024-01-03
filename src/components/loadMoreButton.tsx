// LoadMoreButton.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchMoreFlights } from '../app/flightsSlice';

interface LoadMoreButtonProps {
  onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
    const dispatch = useDispatch();
  
    const handleLoadMoreClick = () => {
        dispatch(fetchMoreFlights() as any); // Здесь используем as any
    };
  
    return (
        <div>
            <button onClick={onClick || handleLoadMoreClick}>Загрузить еще билеты</button>
        </div>
    );
};
  

export default LoadMoreButton;
