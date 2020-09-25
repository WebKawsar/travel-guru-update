import { Box } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Components/Header/Header';
import SearchIcon from '@material-ui/icons/Search';
import Home from '../Components/Home/Home';



const HomePage = () => {
    return (
        <Container>
            <Header>
                <Box className="search-section m-auto">
                    <input className="search-input" type="text" name="" id="" placeholder="Search your destination"/>
                    <SearchIcon className="search-icon"></SearchIcon>
                </Box>
            </Header>
            <Home></Home>



        </Container>
    );
};

export default HomePage;