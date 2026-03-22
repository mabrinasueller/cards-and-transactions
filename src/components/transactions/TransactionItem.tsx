export function TransactionItem({
    description,
    amount,
    color,
}: {
    description: string;
    amount: number;
    color: string;
}) {
    return (
        <li className='transaction-item' style={{ backgroundColor: color }}>
            <span>{description}</span>
            <span>{amount}</span>
        </li>
    );
}
