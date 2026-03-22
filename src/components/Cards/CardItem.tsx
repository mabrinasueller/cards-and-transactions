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
        <div
            className={`card-item ${active ? 'active' : ''}`}
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            <p>{description}</p>
            <p>{id}</p>
        </div>
    );
}
