import { Box } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Components/Header/Header';
import "./Home.css";



const Home = () => {
    return (
        <Box className="home-page">
            <Container>
                <Header></Header>
                <Box>
                    
                </Box>
            </Container>
        </Box>
    );
};

export default Home;