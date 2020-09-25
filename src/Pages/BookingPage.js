import { Box } from '@material-ui/core';
import React from 'react';
import {Container } from 'react-bootstrap';
import Header from '../Components/Header/Header';
import SearchIcon from '@material-ui/icons/Search';
import "./BookingPage.css";



import logo from "../travel-guru-resources/Logo.png";
import Booking from '../Components/Booking/Booking';





const BookingPage = () => {




    return (
        <Box className="booking-section">
            <Container>
                <Header>
                    <Box className="search-section m-auto">
                        <input className="search-input" type="text" name="" id="" placeholder="Search your destination"/>
                        <SearchIcon className="search-icon"></SearchIcon>
                    </Box>
                </Header>
                <Booking></Booking>
            </Container>
        </Box>
    );
};

export default BookingPage;