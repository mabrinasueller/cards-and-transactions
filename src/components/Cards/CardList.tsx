import { CardItem } from './CardItem';
import '../../styles/cards.css';
import type { Card } from '../../types/card';
import cardColors from '../../constants/cardColors';

type CardListProps = {
    cards: Card[];
    activeCardId: string | null;
    onSelectCard: (id: string) => void;
};

export function CardList({ cards, activeCardId, onSelectCard }: CardListProps) {
    return (
        <ul className='card-list'>
            {cards.map((card) => (
                <CardItem
                    key={card.id}
                    description={card.description}
                    id={card.id}
                    color={cardColors[card.id] || 'lightgrey'}
                    active={activeCardId === card.id}
                    onClick={() => onSelectCard(card.id)}
                />
            ))}
        </ul>
    );
}
