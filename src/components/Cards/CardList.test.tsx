import { render, screen, fireEvent } from '@testing-library/react';
import { CardList } from './CardList';

const mockCards = [
    { id: 'card-1', description: 'Card One' },
    { id: 'card-2', description: 'Card Two' },
];

vi.mock('../../constants/cardColors', () => ({
    default: {
        'card-1': 'lightblue',
        'card-2': 'lightgrey',
    },
}));

describe('CardList', () => {
    it('renders all cards', () => {
        render(
            <CardList
                cards={mockCards}
                activeCardId={null}
                onSelectCard={() => {}}
            />,
        );
        expect(screen.getByText('Card One')).toBeInTheDocument();
        expect(screen.getByText('Card Two')).toBeInTheDocument();
    });

    it('highlights active card', () => {
        render(
            <CardList
                cards={mockCards}
                activeCardId='card-2'
                onSelectCard={() => {}}
            />,
        );
        const activeCard = screen.getByText('Card Two').closest('.card-item');
        expect(activeCard).toHaveClass('active');
    });

    it('calls onSelectCard when a card is clicked', () => {
        const onSelectCard = vi.fn();
        render(
            <CardList
                cards={mockCards}
                activeCardId='card-2'
                onSelectCard={onSelectCard}
            />,
        );
        fireEvent.click(screen.getByText('Card Two'));
        expect(onSelectCard).toHaveBeenCalledWith('card-2');
    });
});
