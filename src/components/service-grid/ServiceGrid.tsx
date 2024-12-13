// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import clareamento from "../../assets/clareamento.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cirurgiaoral from "../../assets/cirurgiaoral.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import obturacaodentaria from "../../assets/obturacaodentaria.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import implantedentario from "../../assets/implantedentario.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tratamentoortodontico from "../../assets/tratamentoortodontico.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tratamentodecanal from "../../assets/tratamentodecanal.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import dentadura from "../../assets/dentadura.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pontedentaria from "../../assets/pontedentaria.svg";
import Card from "../card-services/Cards";
import './ServiceGrid.css'

const ServicesGrid = () => {
    const services = [
        { title: "Clareamento", imageUrl: clareamento },
        { title: "Cirurgia Oral", imageUrl: cirurgiaoral },
        { title: "Restaurações", imageUrl: obturacaodentaria },
        { title: "Implantes Dentários", imageUrl: implantedentario },
        { title: "Ortodontia", imageUrl: tratamentoortodontico },
        { title: "Tratamento de Canal", imageUrl: tratamentodecanal },
        { title: "Próteses", imageUrl: dentadura },
        { title: "Placas de Bruxismo", imageUrl: pontedentaria },
    ];

    return (
        <div className="services-grid">
            {services.map((service, index) => (
                <Card key={index} title={service.title} imageUrl={service.imageUrl} />
            ))}
        </div>
    );
};

export default ServicesGrid;