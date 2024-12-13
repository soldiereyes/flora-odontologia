import './App.css';
//images
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import dra_imagem from './assets/dra_imagem.png';
//components
import Navbar from "./components/navbar/Navbar";
import SessionHeader from "./components/header-section/SessionHeader";
import ExpertSection from "./components/expert-section/ExpertSection";
import Location from "./components/location/Location";
import Footer from "./components/footer/Footer";
import BannerInto from "./components/banner-into/BannerInto";
import Scheduling from "./components/scheduling/Scheduling";
import WhatsAppButton from "./components/whatsapp-button/WhatsAppButton";
import SpaceGallery from "./components/space-gallery/SpaceGallery";
import ServiceGrid from "./components/service-grid/ServiceGrid.tsx";

function App() {
    return (
        <>
            <Navbar />
            <section className="content">
                <BannerInto/>
                <div id='section1'>
                    <SessionHeader title="NOSSOS SERVIÇOS"/>
                    <ServiceGrid/>
                </div>
                <div id='section2'>
                    <SessionHeader title="NOSSA ESPECIALISTA"/>
                    <ExpertSection
                        imageUrl={dra_imagem}
                        description='Dra. Luiza de Araujo Quevedo'
                        cro='CRO-SC 23.486'
                        text1='Formada pela PUCRS, uma das melhores graduações de odontologia do Brasil.
                        Possui cursos de atualização estomatologia, capacitação em cirurgia e imersão em facetas.
                        Atuou como clínica geral em Porto Alegre e cidades vizinhas antes de se mudar para Imbituba.'
                        text2='Apaixonada pela odontologia e em cuidar dos pacientes de forma integral,
                        com um atendimento humanizado e personalizado, focando nas necessidades individuais de cada paciente.'
                    />
                </div>
                <Scheduling
                    title="AGENDE SUA CONSULTA"
                    subtitle="Fale conosco e agende sua consulta."
                />
                <div id="section3">
                    <SessionHeader title="CONHEÇA NOSSO ESPAÇO" />
                    <div className="space-container">
                        <SpaceGallery />
                    </div>
                </div>
                <div id='section4'>
                    <SessionHeader title="NOSSA LOCALIZAÇÃO"/>
                    <Location
                        address="Rua Ataíde Manoel da Rosa, 58 - Alto Arroio, Imbituba - SC"
                        openingHours="Segunda a Sexta das 9:00 às 17:00 horas"
                        openingHoursHoliday="Sábado das 9:00 às 12:00 horas"
                        technicalResponsible="Dra. Luiza de Araujo Quevedo CROSC 23.486"
                        contactInfoCellphone="(48) 99127-5624"
                        contactInfoInstagram="@flora.odontologia"
                        contactInfoEmail="flora.odontologias2@gmail.com"
                        contactInfoPhone="(41) 3029-5624"
                    />
                </div>
                <Footer/>
                <WhatsAppButton/>
            </section>
        </>
    );
}

export default App;
