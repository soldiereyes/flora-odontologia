// Card.tsx

import React from 'react';
import './Cards.css';

interface CardProps {
    image: string;
    description: string;
}

const Card: React.FC<CardProps> = ({image, description}) => {
    return (
        <>
            <div className="card-service-container">
                <img src={image} alt="Service" className="card-service-image"/>
                <div className="card-description">{description}</div>
            </div>
        </>
    );
};

export default Card;
