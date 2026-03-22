import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// mock useCards
vi.mock('./hooks/useCards', () => ({
    default: () => ({
        items: [
            { id: 'card-1', description: 'Card One' },
            { id: 'card-2', description: 'Card Two' },
        ],
    }),
}));

// mock useTransactions
vi.mock('./hooks/useTransactions', () => ({
    default: (cardId: string | null) => {
        if (cardId === 'card-1') {
            return {
                items: [
                    {
                        id: 't1',
                        description: 'Groceries',
                        amount: 50,
                        color: 'red',
                    },
                    {
                        id: 't2',
                        description: 'Books',
                        amount: 20,
                        color: 'red',
                    },
                ],
            };
        }
        if (cardId === 'card-2') {
            return {
                items: [
                    {
                        id: 't3',
                        description: 'Travel',
                        amount: 100,
                        color: 'blue',
                    },
                    {
                        id: 't4',
                        description: 'Coffee',
                        amount: 5,
                        color: 'blue',
                    },
                ],
            };
        }
        return { items: [] };
    },
}));

describe('App', () => {
    it('renders cards, filter input, and transactions', () => {
        render(<App />);
        expect(screen.getByText('Card One')).toBeInTheDocument();
        expect(screen.getByText('Card Two')).toBeInTheDocument();
        expect(screen.getByLabelText(/filter by amount/i)).toBeInTheDocument();
        expect(screen.getByText('Groceries')).toBeInTheDocument();
        expect(screen.getByText('Books')).toBeInTheDocument();
    });

    it('filters transactions by amount', () => {
        render(<App />);
        const input = screen.getByLabelText(/filter by amount/i);
        fireEvent.change(input, { target: { value: '30' } });
        expect(screen.getByText('Groceries')).toBeInTheDocument();
        expect(screen.queryByText('Books')).not.toBeInTheDocument();
    });

    it('resets filter when switching cards', () => {
        render(<App />);
        const input = screen.getByLabelText(/filter by amount/i);
        fireEvent.change(input, { target: { value: '60' } });
        // we only have "Groceries" (50) and "Books" (20) for card-1, so none should show
        expect(screen.queryByText('Groceries')).not.toBeInTheDocument();
        expect(screen.queryByText('Books')).not.toBeInTheDocument();

        // switch to Card Two
        fireEvent.click(screen.getByText('Card Two'));
        // filter should reset, so both transactions for Card Two should show
        expect(screen.getByText('Travel')).toBeInTheDocument();
        expect(screen.getByText('Coffee')).toBeInTheDocument();
        // input should be reset to empty string
        expect((input as HTMLInputElement).value).toBe('');
    });
});
