import './App.css'
import Navbar from "./components/navbar/Navbar.tsx";
import SessionHeader from "./components/header-section/SessionHeader.tsx";
import ExpertSection from "./components/expert-section/ExpertSection.tsx";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import dra_imagem from './assets/dra_imagem.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import smile1 from './assets/smile1.svg';
import slide2 from './assets/slide2.svg';
import slide3 from './assets/slide3.svg';
import slide4 from './assets/slide4.svg';
import slide5 from './assets/slide5.svg';
import Contact from "./components/contact/Contact.tsx";
import Location from "./components/location/Location.tsx";
import Footer from "./components/footer/Footer.tsx";
import CarouselComponent from "./components/banner-into/Carousel.tsx";
import Scheduling from "./components/scheduling/Scheduling.tsx";
import Cards from "./components/card-services/Cards.tsx";


function App() {

    const cards = [
        {
            image: slide3,
            description: 'Obturações Dentárias',
        },
        {
            image: slide5,
            description: 'Tratamento de Canal',
        },
        {
            image: slide5,
            description: 'Coroas ',
        },
        {
            image: slide4,
            description: 'Clareamento Dental',
        },
        {
            image: slide3,
            description: 'Próteses Dentárias',
        },
        {
            image: slide2,
            description: 'Tratamento Ortodôntico',
        },
    ];
    return (
        <>
            <Navbar/>
            <section className="content">
                <CarouselComponent/>
                <SessionHeader title="NOSSOS SERVIÇOS"/>
                {cards.map((card, index) => (
                    <Cards key={index} image={card.image} description={card.description} />
                ))}
                <Scheduling callToAction="Agende sua consulta"/>
                <SessionHeader title="CONHEÇA NOSSA ESPECIALISTA"/>
                <ExpertSection
                    imageUrl={dra_imagem}
                    description='Dra. Tamires Oliveira'
                    text='Cirurgiã-dentista (2014), mestre (2016) e doutora (2020) em Biofotônica Aplicada às Ciências
                    da Saúde pela Universidade Nove de Julho (UNINOVE). Têm experiência na área de Fototerapia com
                    ênfase em Terapia Antimicrobiana e atua principalmente nos seguintes temas: terapia fotodinâmica
                    (PDT) e infecções fúngicas. Foi docente da Universidade Nove de Julho (2015-2020) nas disciplinas
                    de Atenção Básica. Têm experiência com metodologias ativas de ensino e realiza especialização em
                    Computação Aplicada à Educação pelo Instituto de Ciências Matemáticas e de Computação da Universidade
                    de São Paulo (ICMC-USP).'
                />
                <SessionHeader title="CONTATO"/>
                <Contact
                    phone1="(46)33186640"
                    phone2="(46)99877-5560"
                    email="contato@floraodonto.com"
                    instagram="@flora.odontologia"
                    imageUrl={smile1}
                />
                <SessionHeader title="NOSSA LOCALIZAÇÃO"/>
                <Location
                    address="Av. Mal Floriano Peixoto, 233 - Curitiba-Paraná"
                    openingHours="Segunda a Sexta das 9:00 às 17:00 Sábado das 9:00 às 13:00"
                    technicalResponsible="Dra Tamires de Oliveira Silva CROSC 19.711"

                />
                <Footer/>
            </section>

        </>
    )
}

export default App
