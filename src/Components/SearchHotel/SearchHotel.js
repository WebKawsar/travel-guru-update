import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import fakeData from '../../fakeData';
import Header from '../Header/Header';
import Hotel from '../Hotel/Hotel';

import "./SearchHotel.css";


const SearchHotel = () => {

    const [localStorgeData, setLocalStroageData] = useState({});
    const [hotelList, setHotelList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {

        const bookingData = JSON.parse(localStorage.getItem("bookingData"));
        setLocalStroageData(bookingData);
        const filterValue = fakeData.filter(hotel => hotel.place === bookingData.destination)
        setHotelList(filterValue);

    }, [])

    console.log(loggedInUser);
    return (
        <Container>
            <hr/>
            <div className="user-info">
                <br/>
                <span>{loggedInUser.name} guest at {localStorgeData.from} to {localStorgeData.to}</span>
                <h5>Stays in {localStorgeData.destination && localStorgeData.destination.toUpperCase()} </h5>
                <p>Available Hotels ({hotelList.length}) are beside in {localStorgeData.destination && localStorgeData.destination.toUpperCase()}</p>
            </div>
              
            {
                hotelList.map(hotelInfo => <Hotel hotelInfo={hotelInfo} key={hotelInfo.id}></Hotel>)
            }
        </Container>
    );
};

export default SearchHotel;