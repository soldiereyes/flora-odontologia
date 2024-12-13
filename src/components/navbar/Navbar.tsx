import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-scroll';

import './Navbar.css';
import Sidebar from '../sidebar/Sidebar';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../assets/logo_nova.png';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="navbar-menu">
                    <li className="navbar-item">
                        <Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-180}
                            duration={700}
                        >
                            SERVIÇOS
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            activeClass="active"
                            to="professional"
                            spy={true}
                            smooth={true}
                            offset={-180}
                            duration={700}
                        >
                            PROFISSIONAL
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            activeClass="active"
                            to="office"
                            spy={true}
                            smooth={true}
                            offset={-250}
                            duration={900}
                        >
                            CONSULTÓRIO
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            activeClass="active"
                            to="location"
                            spy={true}
                            smooth={true}
                            offset={-180}
                            duration={900}
                        >
                            LOCALIZAÇÃO
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <a href="https://wa.me/554891275624" className="talk-to-me">
                            FALE COMIGO
                        </a>
                    </li>
                    <li className="navbar-item-container-icon">
                        <div className="navbar-item-icon">
                            <a className="bs-button" href="https://wa.me/554891275624">
                                <BsWhatsapp />
                            </a>
                        </div>
                    </li>
                    <button className="menu-button" onClick={handleMenuClick}>
                        {isMenuOpen ? <BiX /> : <BiMenu />}
                    </button>
                    <Sidebar isOpen={isMenuOpen} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
