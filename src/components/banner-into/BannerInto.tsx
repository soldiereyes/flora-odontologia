import './BannerInto.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import bannerinto from '../../assets/bannerinto.svg';

const BannerInto: React.FC = () => {
    return (
        <div className="carousel-image">
            <img src={bannerinto} alt="Slide1" />
            <div className="carousel-caption">
                <h1>Transformando Sorrisos com Cuidado e Dedicação</h1>
                <h2>
                    Conheça nossos serviços odontológicos de excelência, realizados por profissionais
                    qualificados que se importam com o paciente e transforme seu sorriso também.
                </h2>
            </div>
        </div>
    );
};

export default BannerInto;
