import { Box } from '@material-ui/core';
import React, { useContext, useEffect, useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import fakePlace from '../../fakeData/fakePlace';
import "./Booking.css";



const Booking = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const {place} = useParams();
    const {placeName, shortDestails} = fakePlace.find(tour => tour.placeName === place)

    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = bookingData => {
        
        const newData = {...loggedInUser, bookingData};
        setLoggedInUser(newData);

        
        localStorage.setItem('bookingData', JSON.stringify(bookingData));

        history.push(`/booking`)

    }

    return (
            <Box className="booking-details-section">
                <Row>
                    <Col md={6}>
                        <Box className="left-section">
                            <h1>{placeName.toUpperCase()}</h1>
                            <p>{shortDestails}</p>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box className="booking-form-section">
                            <form onSubmit={ handleSubmit(onSubmit) }>

                                <label htmlFor="origin">Origin</label>
                                <select ref={register({required: "Select origin" })} name="origin" id="origin">
                                    <option value="">Select Origin</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="sylhet">Sylhet</option>
                                    <option value="rajshahi">Rajshahi</option>
                                    <option value="khulna">Khulna</option>
                                    <option value="barishal">Barishal</option>
                                    <option value="chitagong">Chitagong</option>
                                    <option value="mymensingh">Mymensingh</option>
                                </select>
                                {errors.origin && <p  className="error">{errors.origin.message}</p> }
                                

                                <label htmlFor="destination">Destination</label>
                                <select  ref={register({required: "Select destination-" })} name="destination" id="destination">
                                    <option value="">Select Destination</option>
                                    <option value="coxsbazar">Coxs Bazar</option>
                                    <option value="sreemangal">Sreemangal</option>
                                    <option value="sundarbans">Sundarbans</option>
                                </select>
                                {errors.destination && <p  className="error">{errors.destination.message}</p> }
                                

                                <Box className="left-date">
                                    <label htmlFor="from">From</label>
                                    <input ref={register({required: "Select start date" })} type="date" name="from" id="from" />
                                    {errors.from && <p  className="error">{errors.from.message}</p> }
                                </Box>

                                <Box className="right-date">
                                    <label htmlFor="to">To</label>
                                    <input ref={register({required: "Select end date" })} type="date" name="to" id="to" />
                                    {errors.to && <p  className="error">{errors.to.message}</p> }
                                </Box>

                                <input type="submit" value="Start Booking"/>
                            </form>
                        </Box>
                    </Col>
                </Row>
            </Box>
    );
};

export default Booking;