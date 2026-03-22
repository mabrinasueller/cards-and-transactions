import './App.css';
import { CardList } from './components/cards/CardList';
import { FilterInput } from './components/FilterInput';
import { useEffect, useState } from 'react';
import useCards from '../src/hooks/useCards';

function App() {
    const { items: cards } = useCards();
    const [selectedCardId, setSelectedCardId] = useState(cards[0]?.id || null);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        setFilterValue('');
    }, [selectedCardId]);

    return (
        <div className='App'>
            <CardList
                cards={cards}
                activeCardId={selectedCardId}
                onSelectCard={setSelectedCardId}
            />
            <FilterInput
                value={filterValue}
                onChange={setFilterValue}
                placeholder='Amount'
            />
        </div>
    );
}

export default App;
