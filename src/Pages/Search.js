import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Components/Header/Header';
import SearchHotel from '../Components/SearchHotel/SearchHotel';

const Search = () => {


    return (
        <Container>
            <Header></Header>
            <SearchHotel></SearchHotel>
        </Container>
    );
};

export default Search;