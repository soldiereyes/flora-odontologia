import './App.css'
//images
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import dra_imagem from './assets/dra_imagem.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import consultorio from './assets/consultorio.svg';
//components
import Navbar from "./components/navbar/Navbar.tsx";
import SessionHeader from "./components/header-section/SessionHeader.tsx";
import ExpertSection from "./components/expert-section/ExpertSection.tsx";
import Location from "./components/location/Location.tsx";
import Footer from "./components/footer/Footer.tsx";
import BannerInto from "./components/banner-into/BannerInto.tsx";
import CarouselServices from "./components/caroussel-services/CarouselServices.tsx";
import Scheduling from "./components/scheduling/Scheduling.tsx";
import WhatsAppButton from "./components/whatsapp-button/WhatsAppButton.tsx";
import SpaceGallery from "./components/space-gallery/SpaceGallery.tsx";


function App() {

    return (
        <>
            <Navbar/>
            <section className="content">
                <BannerInto/>
                <div id='section1'>
                    <SessionHeader title="NOSSOS SERVIÇOS"/>
                    <CarouselServices/>
                </div>
                <div id='section2'>
                    <SessionHeader title="NOSSA ESPECIALISTA"/>
                    <ExpertSection
                        imageUrl={dra_imagem}
                        description='Dra. Tamires Oliveira'
                        cro='CRO-SC 19.711'
                        text='Cirurgiã-dentista (2014), mestre (2016) e doutora (2020) em Biofotônica Aplicada às Ciências
                    da Saúde pela Universidade Nove de Julho (UNINOVE). Têm experiência na área de Fototerapia com
                    ênfase em Terapia Antimicrobiana e atua principalmente nos seguintes temas: terapia fotodinâmica
                    (PDT) e infecções fúngicas. Foi docente da Universidade Nove de Julho (2015-2020) nas disciplinas
                    de Atenção Básica. Têm experiência com metodologias ativas de ensino e realiza especialização em
                    Computação Aplicada à Educação pelo Instituto de Ciências Matemáticas e de Computação da Universidade
                    de São Paulo (ICMC-USP).'
                    />
                </div>
                <Scheduling
                    title="AGENDE SUA CONSULTA"
                    subtitle="Fale conosco e agende sua consulta."
                />
                <SessionHeader title="CONHEÇA NOSSO ESPAÇO"/>
                <div id='section3' className='space-container'>
                    <SpaceGallery/>
                </div>
                <div id='section4'>
                    <SessionHeader title="NOSSA LOCALIZAÇÃO"/>
                    <Location
                        address="Rua Ataíde Manoel da Rosa, 58 - Alto Arroio, Imbituba - SC"
                        openingHours="Segunda a Sexta das 9:00 às 17:00 horas"
                        openingHoursHoliday="Sábado das 9:00 às 12:00 horas"
                        technicalResponsible="Dra Tamires de Oliveira Silva CROSC 19.711"
                        contactInfoCellphone="(48) 99127-5624"
                        contactInfoInstagram="@flora.odontologia"
                        contactInfoEmail="floraodonto@gmail.com"
                        contactInfoPhone="(41) 3029-5624"
                    />
                </div>
                <Footer/>
                <WhatsAppButton/>
            </section>
        </>
    )
}

export default App
