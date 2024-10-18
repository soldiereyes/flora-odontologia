import {useState, useEffect} from "react";
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
            title: 'Restaurações',
            description: ' Tratamento que repara dentes danificados por cáries, traumas ou desgaste ' +
                'Normalmente envolve a remoção da parte deteriorada do dente e a aplicação de um material de restauração ' +
                '(como resina ou amálgama) para reconstruir a forma e função do dente.',
            imageUrl: clareamento,
        },
        {
            title: 'Extrações',
            description: 'Procedimento de remoção de um dente,' +
                ' geralmente devido a cárie grave, infecção, dentes impactados (como os sisos) ' +
                'ou superlotação na arcada dentária.',
            imageUrl: cirurgiaoral,
        },
        {
            title: 'Tratamento Periodontal',
            description: 'Tratamento das doenças da gengiva e dos ossos que suportam os dentes (periodonto).' +
                ' Envolve desde a remoção de placa e tártaro até procedimentos cirúrgicos para regenerar o tecido perdido.',
            imageUrl: obturacaodentaria,
        },
        {
            title: 'Profilaxia',
            description: 'Higienização profunda dos dentes feita no consultório para remover tártaro, placa bacteriana e' +
                ' manchas superficiais. Ajuda na prevenção de cáries, gengivites e outras doenças bucais.',
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
            title: 'Próteses',
            description: 'Substituição de dentes perdidos ou gravemente danificados por dentes artificiais.' +
                ' Pode ser prótese fixa (como coroas e pontes) ou removível (como dentaduras).\n' +
                '\n',
            imageUrl: dentadura,
        },
        {
            title: 'Tratamento Endodôntico',
            description: 'Procedimento que trata a polpa do dente (nervo) infectada ou inflamada.' +
                ' O canal radicular é limpo, desinfectado e preenchido, preservando o dente natural.',
            imageUrl: tratamentodecanal,
        },
        {
            title: 'Placas de Bruxismo',
            description: 'Dispositivo usado durante o sono para prevenir o desgaste dentário e alívio de dores associadas' +
                ' ao bruxismo (hábito de ranger ou apertar os dentes), protegendo os dentes e relaxando a musculatura.\n' +
                '\n',
            imageUrl: pontedentaria,
        },
    ];

    useEffect(() => {
        const handleResize = (): void => {
            const carouselInner = document.querySelector('.carousel-services-inner') as HTMLElement;
            console.log("carrousel inner", carouselInner);
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
                        animate={{x: -width - 600}}
                        transition={{repeatType: 'reverse', duration: 30, ease: 'linear'}}
                        dragConstraints={{left: -width - 600, right: 0}}
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
