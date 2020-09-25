import React, { useState } from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import "./Home.css";
import fakePlace from '../../fakeData/fakePlace';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



import slide1 from "../../travel-guru-resources/Image/place-conxsbazar.jpg";
import slide2 from "../../travel-guru-resources/Image/place-sreemangal.jpg";
import slide3 from "../../travel-guru-resources/Image/place-sundarban.jpg";
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';


const Home = () => {

    const [places, setPlaces] = useState(fakePlace);

    const history = useHistory();
    const handleClick = () => {

        history.push("/tour/sreemangal")
    }


    return (
        
        <Container>
            <div className="home-page">
                <div className="row">
                    <div className="col-md-4">

                        <Button onClick={handleClick}>Go tour</Button>

                    </div>
                    <div className="col-md-8">
                        {/* <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slide1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={slide2}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel> */}
                    </div>
                </div>
            </div>
        </Container>

    );
};

export default Home;



const Item = () => {


    return (

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide2}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

    );
};




