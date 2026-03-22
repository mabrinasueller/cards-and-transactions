import './App.css';
import { useEffect, useState } from 'react';
import { CardList } from './components/cards/CardList';
import { FilterInput } from './components/FilterInput';
import { TransactionList } from './components/transactions/TransactionList';
import useCards from '../src/hooks/useCards';
import useTransactions from './hooks/useTransactions';
import transactionsData from './data/transactions.json';
import type { Transaction } from './types/transaction';

function App() {
    const { items: cards } = useCards();
    const [selectedCardId, setSelectedCardId] = useState(cards[0]?.id || null);
    const [filterValue, setFilterValue] = useState('');
    const { items: transactions } = useTransactions(
        selectedCardId as keyof typeof transactionsData | null,
    );

    useEffect(() => {
        setFilterValue('');
    }, [selectedCardId]);

    const filteredTransactions = filterValue
        ? transactions.filter(
              (tx: Transaction) => tx.amount >= Number(filterValue),
          )
        : transactions;

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
            <TransactionList transactions={filteredTransactions} />
        </div>
    );
}

export default App;
