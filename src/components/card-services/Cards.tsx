// Card.tsx

import React from 'react';
import './Cards.css';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl}) => {
    return (
        <div className="slide">
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={imageUrl} alt={title} />
        </div>
    );
};

export default Card;
