import React, { useContext, useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import "./Login.css";
import { useForm } from 'react-hook-form';
import { Box, Link } from '@material-ui/core';
import { handleLoginSystem, initializeFirebaseFramework } from '../../Firebase/FirebaseManager';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';



const Login = (props) => {

    initializeFirebaseFramework();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        
        handleLoginSystem(data)
        .then(response => {

            if(response.success && response.email){
                
                const loginUser = {...loggedInUser, ...response}

                setLoggedInUser(loginUser);
                history.replace(from);

            }
            else{

                const loginUserError = {...loggedInUser}
                loginUserError.success = false;
                loginUserError.error = response.error;

                setLoggedInUser(loginUserError);

            }

        })

    }

    console.log(loggedInUser);

    const [show, setShow] = useState(true);
    return (
        <Container>
            <Box className="login-section">
                <Box className="login">
                    <Row className="justify-content-md-center">
                        <Col md={6}>

                            {
                                (loggedInUser.error && show) && 
                                    <Alert variant="danger" onClick={() => setShow(false)} dismissible>
                                            <Alert.Heading>Oh bro! You got an error!</Alert.Heading>
                                            <p>{loggedInUser.error}</p>
                                    </Alert>
                                 
                            }

                            <Box className="login-form">
                                <h3>Login</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <Box className="input-box">
                                        <input type="email" name="email" ref={register({ 
                                            required: "Email is required",
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Please provide valid email address"
                                            }
                                        })} placeholder="Your email"/>
                                        {
                                            errors.email && <span className="error">{errors.email.message}</span>
                                        }
                                    </Box>

                                    <Box className="input-box">
                                        <input type="password" name="password" ref={register({
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password containing at least 8 characters"
                                            },
                                            pattern: {
                                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                                                message: "Password containing characters, number, upper and lowercase"
                                            }
                                        })} placeholder="Your password"/>
                                        {
                                            errors.password && <span className="error">{errors.password.message}</span>
                                        }
                                    </Box>

                                    <Box className="special-input">
                                        <label htmlFor="checkbox"><input type="checkbox" name="checkbox" id="checkbox"/> Remember me</label>
                                        <Link className="forgot-pass" to="/login">Forgot password</Link>
                                    </Box>
                                    
                                    <input type="submit" value="Log in"/>
                                </form>

                                <p className="create-account">Don't have an account? <span className="toogle" onClick={props.handleLogin}>Create an account</span>
                                </p> 
                            </Box> 
                        </Col>
                    </Row>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;