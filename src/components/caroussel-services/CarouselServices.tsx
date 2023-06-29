import {useState, useEffect , useRef} from "react";
import "./CarouselServices.css";
import {motion} from "framer-motion";
//images
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import slide2 from "../../assets/slide2.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import slide3 from "../../assets/slide3.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import slide4 from "../../assets/slide4.svg";
//components
import Card from "../card-services/Cards.tsx";
const CarouselServices = () => {

    const carousel = useRef();
    const [width, setWidth] = useState(0);
    const services = [
        {
            title: 'Obturações Dentárias',
            description: ' Este tratamento é usado para reparar uma cavidade em um dente. A parte deteriorada do dente ' +
                'é removida e então preenchida com um material como resina composta.',
            imageUrl: slide3,
        },
        {
            title: 'Tratamento de Canal',
            description: 'Este tratamento é usado para remover tecido infectado ou danificado de dentro do dente.' +
                'Geralmente é realizado quando uma cavidade não tratada se espalha para a polpa do dente.',
            imageUrl: slide2,
        },
        {
            title: 'Coroas Dentárias',
            description: 'Uma coroa é uma capa que é colocada sobre um dente danificado para restaurar sua forma, ' +
                'tamanho e força. As coroas são comumente usadas para dentes quebrados',
            imageUrl: slide3,
        },
        {
            title: 'Clareamento Dental',
            description: 'Este tratamento é usado para remover manchas e descoloração dos dentes. Pode ser feito no ' +
                'consultório ou em casa com o uso de produtos clareadores.',
            imageUrl: slide4,
        },
        {
            title: 'Implantes Dentários',
            description: 'Os implantes são usados para substituir dentes perdidos. Um pino de titânio é cirurgicamente ' +
                'inserido no osso da mandíbula e um dente protético é fixado ao pino.',
            imageUrl: slide4,
        },
        {
            title: 'Tratamento Ortodôntico',
            description: 'O tratamento ortodôntico envolve o uso de aparelhos ortodônticos ou alinhadores para' +
                ' alinhar os dentes e corrigir problemas de mordida.',
            imageUrl: slide2,
        },
        {
            title: 'Tratamento Ortodôntico',
            description: 'O tratamento ortodôntico envolve o uso de aparelhos ortodônticos ou alinhadores para' +
                ' alinhar os dentes e corrigir problemas de mordida.',
            imageUrl: slide2,
        },
        {
            title: 'Tratamento Ortodôntico',
            description: 'O tratamento ortodôntico envolve o uso de aparelhos ortodônticos ou alinhadores para' +
                ' alinhar os dentes e corrigir problemas de mordida.',
            imageUrl: slide2,
        },
        {
            title: 'Tratamento Ortodôntico',
            description: 'O tratamento ortodôntico envolve o uso de aparelhos ortodônticos ou alinhadores para' +
                ' alinhar os dentes e corrigir problemas de mordida.',
            imageUrl: slide2,
        },
        {
            title: 'Tratamento Ortodôntico',
            description: 'O tratamento ortodôntico envolve o uso de aparelhos ortodônticos ou alinhadores para' +
                ' alinhar os dentes e corrigir problemas de mordida.',
            imageUrl: slide2,
        },
        {
            title: 'Tratamento Ortodôntico',
            description: 'O tratamento ortodôntico envolve o uso de aparelhos ortodônticos ou alinhadores para' +
                ' alinhar os dentes e corrigir problemas de mordida.',
            imageUrl: slide2,
        },
    ];

    useEffect(() => {
        if (carousel.current) {
            console.log(
                (carousel.current as HTMLDivElement).scrollWidth,
                (carousel.current as HTMLDivElement).offsetWidth
            );
            setWidth(
                (carousel.current as HTMLDivElement).scrollWidth -
                (carousel.current as HTMLDivElement).offsetWidth
            );
        }
    }, []);

    return (
            <motion.div className="carousel-services-container"
                        whileTap={{cursor: 'grabbing'}}>
                <motion.div className="carousel-services-inner"
                            drag="x"
                            dragConstraints={{left: -1400, right: 0}}
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
