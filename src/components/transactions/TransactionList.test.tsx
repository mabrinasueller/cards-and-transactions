import { render, screen } from '@testing-library/react';
import { TransactionList } from './TransactionList';

const transactions = [
    {
        description: 'Groceries',
        amount: 50,
        color: 'lightblue',
    },
    {
        description: 'Books',
        amount: 20,
        color: 'lightgrey',
    },
];

describe('TransactionList', () => {
    it('renders all transactions', () => {
        render(<TransactionList transactions={transactions} />);
        expect(screen.getByText('Groceries')).toBeInTheDocument();
        expect(screen.getByText('Books')).toBeInTheDocument();
        expect(screen.getByText('50')).toBeInTheDocument();
        expect(screen.getByText('20')).toBeInTheDocument();
    });

    it('renders with correct background colors', () => {
        render(<TransactionList transactions={transactions} />);
        const items = document.querySelectorAll('.transaction-item');
        // need to use getComputedStyle to check the actual rendered color
        expect(getComputedStyle(items[0]).backgroundColor).toBe(
            'rgb(173, 216, 230)', // lightblue
        );
        expect(getComputedStyle(items[1]).backgroundColor).toBe(
            'rgb(211, 211, 211)', // lightgrey
        );
    });

    it('renders nothing if transactions are empty', () => {
        render(<TransactionList transactions={[]} />);
        expect(screen.queryByText(/./)).not.toBeInTheDocument();
    });
});
