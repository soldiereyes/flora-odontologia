import './Carousel.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import slide1 from '../../assets/slide1.svg';

function CarouselComponent() {
    return (
        <div className='carousel-inner'>
            <div className='carousel-image'>
                <img src={slide1} alt='Slide1' />
                <div className='carousel-caption'>
                    <h1>Um sorriso perfeito começa aqui!</h1>
                    <h2>Conheça nossos serviços odontológicos de excelência,
                        equipe especializada e tecnologia de ponta. Cuidamos do seu sorriso com carinho e dedicação.
                        Agende sua consulta e descubra como podemos transformar sua experiência odontológica!</h2>
                </div>
            </div>
        </div>
    );
}


export default CarouselComponent;
