import { CardItem } from './CardItem';
import '../../styles/cards.css';
import type { Card } from '../../types/card';

const cardColors: Record<string, string> = {
    'lkmfkl-mlfkm-dlkfm': 'lightblue',
    'elek-n3lk-4m3lk4': 'lightgrey',
};

type CardListProps = {
    cards: Card[];
    activeCardId: string | null;
    onSelectCard: (id: string) => void;
};

export function CardList({ cards, activeCardId, onSelectCard }: CardListProps) {
    return (
        <div className='card-list'>
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
        </div>
    );
}
