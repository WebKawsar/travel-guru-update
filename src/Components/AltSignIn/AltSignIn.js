import React, { useContext } from 'react';
import "./AltSignIn.css";
import { Col, Container, Row } from 'react-bootstrap';
import { Box } from '@material-ui/core';
import faIcon from "../../travel-guru-resources/Icon/fb.png";
import googleIcon from "../../travel-guru-resources/Icon/google.png";
import { facebookSignIn, googleSignIn, initializeFirebaseFramework } from '../../Firebase/FirebaseManager';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';




const AltSignIn = () => {

    initializeFirebaseFramework();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleFacebookSignIn = () => {
        
        facebookSignIn()
        .then(response => {
            
            if(response.success && response.email){

                const facebookSignInUser = {...loggedInUser, ...response};
                setLoggedInUser(facebookSignInUser);
                history.replace(from);
            }
            else{
        
                const facebookSignInUserError = {...loggedInUser, ...response};
                setLoggedInUser(facebookSignInUserError);            
            }

        })

    }

    const handleGoogleSignIn = () => {
        
        googleSignIn()
        .then(response => {

            if(response.success && response.email){

                const googleSignInUser = {...loggedInUser, ...response};
                setLoggedInUser(googleSignInUser);
                history.replace(from);

              }
              else{
        
                const googleSignInError = {...loggedInUser, ...response};
                setLoggedInUser(googleSignInError);  
            }

        })

    }

    return (
        
        <Container>
            <Box className="alternate-signin-system">
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <Box className="or-section">
                            <hr/> Or <hr/>
                        </Box>
                        <Box onClick={handleFacebookSignIn} className="facebook">
                            <img className="icon" src={faIcon} alt=""/>
                            <p>Continue with Facebook</p>
                        </Box>
                        <Box onClick={handleGoogleSignIn} className="google">
                            <img className="icon" src={googleIcon} alt=""/>
                            <p>Continue with Google</p>
                        </Box>
                    </Col>
                </Row>
            </Box>
        </Container>
    );
};

export default AltSignIn;