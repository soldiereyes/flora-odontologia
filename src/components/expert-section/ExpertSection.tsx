import React from 'react';
import './ExpertSection.css';

interface SectionProps {
    imageUrl: string;
    text: string;
    description: string;
}

const ExpertSection: React.FC<SectionProps> = ({imageUrl, text, description}) => {
    return (
        <section className="section">
            <div className="column-1">
                <div className="card">
                    <div className="content_name_image">
                        <div className="circle">
                            <img src={imageUrl} alt="Imagem" className="image"/>
                        </div>
                        <div className='description'>{description}</div>
                    </div>
                </div>
            </div>
            <div className="column-2">
                <div className="text">{text}</div>
            </div>
        </section>
    );
};

export default ExpertSection;
