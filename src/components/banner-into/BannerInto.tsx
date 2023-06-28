import './BannerInto.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import bannerinto from '../../assets/bannerinto.svg';


function BannerInto() {
    return (
            <div className='carousel-image'>
                <img src={bannerinto} alt='Slide1' />
                <div className='carousel-caption'>
                    <h1>Seu sorriso perfeito começa aqui!</h1>
                    <h2>Conheça nossos serviços odontológicos de excelência e nossa
                        equipe especializada com tecnologia de ponta.</h2>
                </div>
            </div>
    );
}


export default BannerInto;
