import React from 'react';
import './Scheduling.css';

interface SchedulingProps {
    title?: string;
    subtitle?: string;
}

const Scheduling: React.FC<SchedulingProps> = () => {
    return (
            <a href="https://wa.me/554891275624" className="button-call-to-action">
                <i className="fab fa-whatsapp">
                </i> MARQUE UMA CONSULTA
            </a>
    )
}
export default Scheduling;
