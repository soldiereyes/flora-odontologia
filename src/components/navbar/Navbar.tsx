import React, {useState} from 'react';
import {BiMenu} from 'react-icons/bi';
import {BsWhatsapp} from 'react-icons/bs';
import './Navbar.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../assets/logo.svg';



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
                    <li className="navbar-item">Serviços</li>
                    <li className="navbar-item">Contato</li>
                    <li className="navbar-item">Localização</li>
                    <li className="navbar-item">
                        Fale Comigo
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
