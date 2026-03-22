import '../styles/filter-input.css';

export function FilterInput({
    value,
    onChange,
    placeholder,
}: {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}) {
    return (
        <div className='filter-input'>
            <label htmlFor='filter-input'>Filter by amount</label>
            <input
                id='filter-input'
                type='number'
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
