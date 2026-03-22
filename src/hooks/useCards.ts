import cardsData from '../data/cards.json';
import type { Card } from '../types/card';

const useCards = () => {
    const items: Card[] = cardsData;
    const selectedCard = items[0];

    return { items, selectedCard };
};

export default useCards;
