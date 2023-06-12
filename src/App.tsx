import './App.css'
//images
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import dra_imagem from './assets/dra_imagem.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import smile1 from './assets/smile1.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import consultorio from './assets/consultorio.svg';
//components
import Contact from "./components/contact/Contact.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import SessionHeader from "./components/header-section/SessionHeader.tsx";
import ExpertSection from "./components/expert-section/ExpertSection.tsx";
import Location from "./components/location/Location.tsx";
import Footer from "./components/footer/Footer.tsx";
import CarouselComponent from "./components/banner-into/Carousel.tsx";
import CarouselServices from "./components/caroussel-services/CarouselServices.tsx";
import Scheduling from "./components/scheduling/Scheduling.tsx";


function App() {

    return (
        <>
            <Navbar/>
            <section className="content">
                <CarouselComponent/>
                <SessionHeader title="NOSSOS SERVIÇOS"/>
                <CarouselServices/>

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
                <Scheduling
                title="AGENDE SUA CONSULTA"
                subtitle="Fale conosco e agende sua consulta."
                />
                <Contact
                    phone1="(46)33186640"
                    phone2="(46)99877-5560"
                    email="contato@floraodonto.com"
                    instagram="@flora.odontologia"
                    imageUrl={consultorio}
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
