export function CardItem({
    description,
    id,
    color,
    active,
    onClick,
}: {
    description: string;
    id: string;
    color: string;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type='button'
            className={`card-item ${active ? 'active' : ''}`}
            style={{ backgroundColor: color }}
            onClick={onClick}
            aria-pressed={active}
        >
            <span className='card-description'>{description}</span>
            <span>{id}</span>
        </button>
    );
}
