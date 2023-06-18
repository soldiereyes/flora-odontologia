import React from 'react';
import './Location.css';
import logo from '../../assets/logo.svg';


interface SectionProps {
    address: string;
    openingHours: string;
    openingHoursHoliday: string;
    technicalResponsible: string;
}

const Location: React.FC<SectionProps> = ({ address, openingHours,openingHoursHoliday, technicalResponsible }) => {
    // Função para carregar o mapa do Google Maps
    const loadMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: -23.5505, lng: -46.6333 }, // Coordenadas do centro do mapa
            zoom: 15, // Zoom do mapa
        });

        // Marcador para indicar a localização do consultório
        const marker = new window.google.maps.Marker({
            position: { lat: -23.5505, lng: -46.6333 }, // Coordenadas do marcador
            map: map,
            title: 'Consultório',
        });
    };

    React.useEffect(() => {
        // Carregar o mapa após o componente ser montado
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDlomHE8pV2Yq-OZ09__5todbHYDH67EQc`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        // Remover o script do mapa ao desmontar o componente
        return () => {
            document.head.removeChild(script);
        };
    }, []);

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
                        <img src={logo} alt='Logo'/>
                    </div>
                </div>
            </div>
            <div className="column">
                <div id="map" className="map-container">
                    <div className='map-inner'>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default Location;
