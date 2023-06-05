import {IoLogoWhatsapp} from 'react-icons/io';

function WhatsAppButton() {
    return (
        <div className="whatsapp-button">
            <div className='icon-fixed'>

                <a href="https://api.whatsapp.com/send?phone=SEUNUMERODOTELEFONE" target="_blank"
                   rel="noopener noreferrer">
                    <IoLogoWhatsapp/>

                </a>
            </div>
        </div>
    );
}

export default WhatsAppButton;
