// src/components/common/Card.jsx
import React from 'react';

const Card = ({
    children,
    className = '',
    shadow = 'md',
    rounded = 'lg',
    padding = 'p-6',
    hover = false,
    ...props
}) => {
    const baseClasses = 'bg-white border border-gray-200';
    const shadowClasses = {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl'
    };
    const roundedClasses = {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl'
    };
    const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';

    return (
        <div
            className={`${baseClasses} ${shadowClasses[shadow]} ${roundedClasses[rounded]} ${padding} ${hoverClasses} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;