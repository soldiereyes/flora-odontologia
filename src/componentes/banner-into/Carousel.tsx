import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import slide1 from '../../assets/slide1.svg';


function CarouselComponent() {
    return (
        <div style={{width: '100%', height: '100%', display:'block'}}>
            <Carousel slide={false} controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                        style={{ objectFit: 'cover', maxHeight: '100%', maxWidth: '100%' }}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="Second slide"
                        style={{ objectFit: 'cover', maxHeight: '100%', maxWidth: '100%' }}

                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="Third slide"
                        style={{ objectFit: 'cover', maxHeight: '100%', maxWidth: '100%' }}

                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselComponent;
