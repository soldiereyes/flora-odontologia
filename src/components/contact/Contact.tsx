import React from 'react';
import './Contact.css';

import { BsTelephone } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

interface SectionProps {
    phone1: string;
    phone2: string;
    email: string;
    instagram: string;
    imageUrl: string;
}

const Contact: React.FC<SectionProps> = ({ phone1, phone2, email, instagram, imageUrl }) => {
    return (
        <section className="section">
            <div className="column-contact">
                <div className="card">
                    <div className="contact-field">
                        <div className="icon">
                            <BsTelephone />
                        </div>
                        <div className="contact-info">{phone1}</div>
                    </div>
                    <div className="contact-field">
                        <div className="icon">
                            <FiSmartphone />
                        </div>
                        <div className="contact-info">{phone2}</div>
                    </div>
                    <div className="contact-field">
                        <div className="icon">
                            <FiMail />
                        </div>
                        <div className="contact-info">{email}</div>
                    </div>
                    <div className="contact-field">
                        <div className="icon">
                            <BsInstagram />
                        </div>
                        <div className="contact-info">{instagram}</div>
                    </div>
                </div>
            </div>
            <div className="column-image">
                <img src={imageUrl} alt="Imagem" className="image_clinic" />
            </div>
        </section>
    );
};

export default Contact;
