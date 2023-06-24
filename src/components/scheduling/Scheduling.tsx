import React from 'react';
import './Scheduling.css';
import {BsWhatsapp} from "react-icons/bs";

interface SchedulingProps {
    title: string;
    subtitle: string;
}

const Scheduling: React.FC<SchedulingProps> = ({title,subtitle  }) => {
    return (
        <div className="call-to-action">
            <h2 className="title-call-to-action">{title}</h2>
            <p className="subtitle-call-to-action">{subtitle}</p>
            <a href="https://wa.me/5546998775560" className="button-call-to-action">
                <i className="fab fa-whatsapp">
                    <BsWhatsapp/>
                </i> Agende pelo WhatsApp
            </a>
        </div>

    )
}
export default Scheduling;
