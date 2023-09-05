import React from 'react';
import './Location.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo_sem_fundo from '../../assets/logo_sem_fundo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import map from '../../assets/map.svg';

import {BsTelephone} from "react-icons/bs";
import {FiSmartphone} from "react-icons/fi";
import {FiMail} from "react-icons/fi";
import {BsInstagram} from "react-icons/bs";


interface SectionProps {
    address: string;
    openingHours: string;
    openingHoursHoliday: string;
    technicalResponsible: string;
    contactInfoCellphone: string;
    contactInfoInstagram: string;
    contactInfoEmail: string;
    contactInfoPhone: string;
}

const Location: React.FC<SectionProps> = ({
                                              address,
                                              openingHours,
                                              openingHoursHoliday,
                                              technicalResponsible,
                                              contactInfoCellphone,
                                              contactInfoInstagram,
                                              contactInfoEmail,
                                              contactInfoPhone,

                                          }) => {
    return (
        <section className="section">
            <div className="column">
                <div className="card-location">
                    <div className="info-field">
                        <div className="label">Endereço:</div>
                        <div className="value">{address}</div>
                    </div>
                    <div className="info-field">
                        <div className="label">Horário de Funcionamento:</div>
                        <div className="value">{openingHours}</div>
                        <div className="value">{openingHoursHoliday}</div>
                    </div>
                    <div className="info-field">
                        <div className="label">Responsável Técnico:</div>
                        <div className="value">{technicalResponsible}</div>
                    </div>
                    <div className="info-field">
                        <div className="label-contato">Contato:</div>
                        <div className="info-field-inner">

                            <div className="contact-field-collum1">
                                <div className="contact-field">
                                    <div className="value-contact">
                                        <div className="icon">
                                            <BsTelephone/>
                                        </div>
                                        {contactInfoPhone}
                                    </div>
                                </div>

                                <div className="contact-field">
                                    <div className="value-contact">
                                        <div className="icon">
                                            <FiSmartphone/>
                                        </div>
                                        <a href="https://wa.me/554891275624" className='phone-ref'>
                                            {contactInfoCellphone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-field-collum2">
                                <div className="contact-field">
                                    <div className="value-contact">
                                        <div className="icon">
                                            <BsInstagram/>
                                        </div>
                                        <a href="https://www.instagram.com/flora.odontologia/"
                                           className='instagram-ref'>
                                            {contactInfoInstagram}
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-field">
                                    <div className="value-contact-last">
                                        <div className="icon">
                                            <FiMail/>
                                        </div>
                                        {contactInfoEmail}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="info-field">
                        <img src={logo_sem_fundo} alt='Logo'/>
                    </div>
                </div>
            </div>
            <div className="column">
                <div id="map" className="map-container">
                    <a href='https://www.google.com.br/maps/search/flora+odontologia/@-28.1615934,-48.6907556,18z?entry=ttu'>
                        <img src={map} alt='Map' className='map-image'/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Location;
