import './BannerInto.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import slide1 from '../../assets/slide1.svg';

function BannerInto() {
    return (
            <div className='carousel-image'>
                <img src={slide1} alt='Slide1' />
                <div className='carousel-caption'>
                    <h1>Seu sorriso perfeito começa aqui!</h1>
                    <h2>Conheça nossos serviços odontológicos de excelência,
                        equipe especializada e tecnologia de ponta.</h2>
                </div>
            </div>
    );
}


export default BannerInto;
