import {IoLogoWhatsapp} from 'react-icons/io';
import './WhatsAppButton.css';

function WhatsAppButton() {
    return (
        <div className="whatsapp-button">
            <div className='icon-fixed'>
                <a href="https://wa.me/5546998775560" target="_blank"
                   rel="noopener noreferrer">
                    <IoLogoWhatsapp/>
                </a>
            </div>
        </div>
    );
}

export default WhatsAppButton;
