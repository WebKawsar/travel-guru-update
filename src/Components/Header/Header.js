import React, { useContext } from 'react';
import "./Header.css";
import logo from "../../travel-guru-resources/Logo.png";
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

import * as firebase from "firebase/app";
import "firebase/auth";
import { Box } from '@material-ui/core';


const Header = (props) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if(location.pathname === "/home" || location.pathname === "/"){
        console.log("milse");
    }



    const handleLogOut = () => {

        firebase.auth().signOut()
        .then(() => {

            setLoggedInUser({});
            history.replace(from)
          })
          .catch(error => {

            console.log(error);
          });

    }

    return (
        <Box className="header-section">
            <Box className="row header">
                <Box className="col-md-6 d-flex align-items-center">
                    <Box className="logo-section">
                        <Link to="/home"><img src={logo} alt=""/></Link>
                    </Box>
                    {
                        props.children
                    }
                </Box>
                <Box className="col-md-6">
                    <Box className="main-menu">
                        <ul className="navigation">
                            
                            <li><Link to="/home">News</Link></li>
                            <li><Link to="/home">Destination</Link></li>
                            <li><Link to="/home">Blog</Link></li>
                            <li><Link to="/home">Contact</Link></li>
                            
                            {
                                loggedInUser.email ? <li><Link onClick={handleLogOut}  className="login" to="/logout">Logout</Link></li> : <li><Link className="login" to="/login">Login</Link></li>
                            }
                            
                        </ul>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;