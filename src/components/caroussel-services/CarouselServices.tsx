import {useState, useEffect } from "react";
import "./CarouselServices.css";
import {motion} from "framer-motion";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import clareamento from "../../assets/clareamento.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import obturacaodentaria from "../../assets/obturacaodentaria.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import implantedentario from "../../assets/implantedentario.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tratamentodecanal from "../../assets/tratamentodecanal.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import coroasdentarias from "../../assets/coroasdentarias.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tratamentoortodontico from "../../assets/tratamentoortodontico.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tratmentodedoencasgengivais from "../../assets/tratmentodedoencasgengivais.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import dentadura from "../../assets/dentadura.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cirurgiaoral from "../../assets/cirurgiaoral.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pontedentaria from "../../assets/pontedentaria.svg";

import Card from "../card-services/Cards.tsx";
const CarouselServices = () => {

    const [width, setWidth] = useState(0);

    const services = [
        {
            title: 'Obturações Dentárias',
            description: ' Este tratamento é usado para reparar uma cavidade em um dente. A parte deteriorada do dente ' +
                'é removida e então preenchida com um material como resina composta.',
            imageUrl: obturacaodentaria,
        },
        {
            title: 'Tratamento de Canal',
            description: 'Este tratamento é usado para remover tecido infectado ou danificado de dentro do dente.' +
                'Geralmente é realizado quando uma cavidade não tratada se espalha para a polpa do dente.',
            imageUrl: tratamentodecanal,
        },
        {
            title: 'Coroas Dentárias',
            description: 'Uma coroa é uma capa que é colocada sobre um dente danificado para restaurar sua forma, ' +
                'tamanho e força. As coroas são comumente usadas para dentes quebrados',
            imageUrl: coroasdentarias,
        },
        {
            title: 'Clareamento Dental',
            description: 'Este tratamento é usado para remover manchas e descoloração dos dentes. Pode ser feito no ' +
                'consultório ou em casa com o uso de produtos clareadores.',
            imageUrl: clareamento,
        },
        {
            title: 'Implantes Dentários',
            description: 'Os implantes são usados para substituir dentes perdidos. Um pino de titânio é cirurgicamente ' +
                'inserido no osso da mandíbula e um dente protético é fixado ao pino.',
            imageUrl: implantedentario,
        },
        {
            title: 'Tratamento Ortodôntico',
            description: 'O tratamento ortodôntico envolve o uso de aparelhos ortodônticos ou alinhadores para' +
                ' alinhar os dentes e corrigir problemas de mordida.',
            imageUrl: tratamentoortodontico,
        },
        {
            title: 'Tratamento de Doenças Gengivais',
            description: 'Este tratamento é usado para tratar e prevenir doenças gengivais. Pode envolver limpeza profunda,' +
                ' raspagem e alisamento radicular, antibióticos ou cirurgia.',
            imageUrl: tratmentodedoencasgengivais,
        },
        {
            title: 'Dentaduras',
            description: 'Dentaduras são aparelhos removíveis usados para substituir dentes ausentes. Podem ser dentaduras parciais ou completas.',
            imageUrl: dentadura,
        },
        {
            title: 'Cirurgia oral',
            description: 'A cirurgia oral pode ser necessária para remover os dentes do siso, reparar uma lesão na mandíbula ou tratar um tumor ou cisto.',
            imageUrl: cirurgiaoral,
        },
        {
            title: 'Ponte dentária',
            description: 'as pontes são usadas para substituir um ou mais dentes ausentes. Elas são ancoradas aos dentes' +
                ' adjacentes e geralmente são feitas de porcelana ou cerâmica.',
            imageUrl: pontedentaria,
        },
    ];

    useEffect(() => {
        const handleResize = (): void => {
            const carouselInner = document.querySelector('.carousel-services-inner') as HTMLElement;
            console.log("carrousel inner",carouselInner);
            if (carouselInner) {
                setWidth(carouselInner.offsetWidth);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
            <motion.div className="carousel-services-container"
                        whileTap={{cursor: 'grabbing'}}>
                <motion.div className="carousel-services-inner"
                            drag="x"
                            dragElastic={0.1}
                            animate={{ x: -width  - 600 }}
                            transition={{ repeatType: 'reverse', duration: 30, ease: 'linear' }}
                            dragConstraints={{ left: -width - 600, right: 0 }}
                >
                    <div className="cards-services-container">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                title={service.title}
                                description={service.description}
                                imageUrl={service.imageUrl}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
    );
};

export default CarouselServices;
