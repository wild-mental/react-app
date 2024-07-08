import React from 'react'
import './Card.css';

interface CardProps {
    className?: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {

    const cn = 'card ' + className;

    return (
        <div className={cn}>
            {children}
        </div>
    )
}

export default Card