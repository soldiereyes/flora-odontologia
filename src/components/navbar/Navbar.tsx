import React, {useState} from 'react';
import {BiMenu} from 'react-icons/bi';
import {BsWhatsapp} from 'react-icons/bs';
import {Link} from 'react-scroll';

import './Navbar.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../assets/logo_sem_fundo.svg';


const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="navbar-menu">
                    <li className="navbar-item">
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-180}
                            duration={700}
                        >
                            Serviços
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-180}
                            duration={700}
                        >
                            Especialista
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={900}
                        >
                            Contato
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={-180}
                            duration={900}
                        >
                            Localização
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        Fale Comigo
                        </Link>
                        <BsWhatsapp/>
                    </li>
                    <button className="menu-button" onClick={handleMenuClick}>
                        <BiMenu/>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
