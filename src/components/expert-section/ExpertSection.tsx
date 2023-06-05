import React from 'react';
import './ExpertSection.css';

interface SectionProps {
    imageUrl: string;
    text: string;
    description: string;
}

const ExpertSection: React.FC<SectionProps> = ({imageUrl, text, description}) => {
    return (
        <section className="section-expert-section">
            <div className="column-1">
                <div className="card-inner-expert-section">
                    <div className="content-name-image">
                        <div className="circle">
                            <img src={imageUrl} alt="Imagem" className="image"/>
                        </div>
                        <div className='description-expert-section'>{description}</div>
                    </div>
                </div>
            </div>
            <div className="column-2">
                <div className="text-expert-section">{text}</div>
            </div>
        </section>
    );
};

export default ExpertSection;
