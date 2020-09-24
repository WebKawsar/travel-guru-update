import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AltSignIn from '../Components/AltSignIn/AltSignIn';
import Header from '../Components/Header/Header';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';




const LoginPage = () => {

    const [newUser, setNewUser] = useState(false);

    const handleLogin = () => {

        setNewUser(!newUser)
    }

    const handleRegister = () => {

        setNewUser(!newUser);
    }


    return (
        <Container>
            <Header></Header>

            {
                newUser ? <Register handleRegister={handleRegister}></Register> : <Login handleLogin={handleLogin}></Login>
            }

            <AltSignIn></AltSignIn>
        </Container>
    );
};

export default LoginPage;