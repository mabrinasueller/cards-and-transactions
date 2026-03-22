import transactionData from '../data/transactions.json';
import cardColors from '../constants/cardColors';
import type { Transaction } from '../types/transaction';

type CardId = keyof typeof transactionData;

const useTransactions = (cardId: CardId | null) => {
    if (!cardId || !(cardId in transactionData)) return { items: [] };
    const items: Transaction[] = (
        transactionData[cardId] as Omit<Transaction, 'color'>[]
    ).map((transaction) => ({
        ...transaction,
        color: cardColors[cardId] || '#FFFFFF',
    }));
    return { items };
};

export default useTransactions;
