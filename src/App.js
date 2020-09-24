import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchHotel from './Components/SearchHotel/SearchHotel';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Booking from './Components/Booking/Booking';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';


export const UserContext = createContext();



function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>


          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>

          <Route path="/tour/:place">
            <Booking></Booking>
          </Route>

          <PrivateRoute path="/booking/:place">
            <SearchHotel></SearchHotel>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>




        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
