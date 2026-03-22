import { TransactionItem } from './TransactionItem';
import '../../styles/transactions.css';

export function TransactionList({
    transactions,
}: {
    transactions: Array<{ description: string; amount: number; color: string }>;
}) {
    return (
        <ul className='transaction-list'>
            {transactions.map((tx, index) => (
                <TransactionItem key={index} {...tx} color={tx.color} />
            ))}
        </ul>
    );
}
