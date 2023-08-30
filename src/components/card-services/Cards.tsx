// Card.tsx

import React from 'react';
import './Cards.css';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({title, description, imageUrl}) => {
    return (
        <div className="slide">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='none'>
                <img src={imageUrl} alt={title}/>
            </div>
        </div>
    );
};

export default Card;
