
import React, { useEffect, useRef, useState } from 'react';
import './ExpertSection.css';

interface SectionProps {
    imageUrl: string;
    text: string;
    text_additional?: string;
    description: string;
    cro?: string;
}

const ExpertSection: React.FC<SectionProps> = ({imageUrl, text, description,cro}) => {

    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkVisibility = () => {
            if (componentRef.current) {
                const rect = componentRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                setIsVisible(rect.top <= windowHeight && rect.bottom >= 0);
            }
        };

        window.addEventListener('scroll', checkVisibility);
        checkVisibility();

        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);



    return (
        <section className="section-expert-section">
            <div className="column-1">
                <div className="card-inner-expert-section">
                    <div className={`content-name-image ${isVisible ? 'visible' : ''}`} ref={componentRef}>
                        <div className="circle">
                            <img src={imageUrl} alt="Imagem" className="image"/>
                        </div>
                        <div className='description-expert-section'>{description}</div>
                        <div className='description-expert-section-cro'>{cro}</div>
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
