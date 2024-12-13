import React from 'react';
import './Cards.css';

interface CardProps {
    title: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default Card;
