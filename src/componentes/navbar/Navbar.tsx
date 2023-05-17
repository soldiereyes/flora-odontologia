import React, {useState} from 'react';
import './Navbar.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../assets/logo.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import whatsapp from '../../assets/whatsapp.svg';


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
                <ul className="navbar-menu">
                    <li className="navbar-item">Serviços</li>
                    <li className="navbar-item">Contato</li>
                    <li className="navbar-item">Localização</li>
                    <li className="navbar-item">
                        Fale Comigo
                        <img src={whatsapp} alt="Whatsapp"/>
                    </li>
                    <button className="menu-button" onClick={handleMenuClick}>
                        <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}/>
                    </button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
