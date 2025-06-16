import { useState } from 'react';

export default function Input() {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        if (!newValue) {
            setError('Không được để trống!');
        } else {
            setError('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Enter something..."
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};