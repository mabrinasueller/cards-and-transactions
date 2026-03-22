import './App.css';
import { CardList } from './components/Cards/CardList';
import { useState } from 'react';
import useCards from '../src/hooks/useCards';

function App() {
    const { items: cards } = useCards();
    const [selectedCardId, setSelectedCardId] = useState(cards[0]?.id || null);

    return (
        <div className='App'>
            <CardList
                cards={cards}
                activeCardId={selectedCardId}
                onSelectCard={setSelectedCardId}
            />
        </div>
    );
}

export default App;
