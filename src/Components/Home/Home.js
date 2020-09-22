import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import "./Home.css";
import fakePlace from '../../fakeData/fakePlace';
import TourPlace from '../TourPlace/TourPlace';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



import slide1 from "../../travel-guru-resources/Image/place-conxsbazar.jpg";
import slide2 from "../../travel-guru-resources/Image/place-conxsbazar.jpg";
import slide3 from "../../travel-guru-resources/Image/place-conxsbazar.jpg";


const Home = () => {


    return (
        <div className="home-section">
            <Container>
                <Header></Header>
                <div className="home-page">
                    <div className="row">
                        <div className="col-md-6">

                            <h2>Left Side</h2>

                        </div>
                        <div className="col-md-6">

                            <Swiper
                                spaceBetween={50}
                                slidesPerView={3}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide><img style={{width: "200px"}} src={slide1} alt=""/></SwiperSlide>
                                <SwiperSlide><img style={{width: "200px"}} src={slide2} alt=""/></SwiperSlide>
                                <SwiperSlide><img style={{width: "200px"}} src={slide3} alt=""/></SwiperSlide>
                            </Swiper>


                        </div>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Home;


