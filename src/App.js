import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchHotel from './Components/SearchHotel/SearchHotel';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import LoginPage from './Pages/LoginPage';
import BookingPage from './Pages/BookingPage';
import HomePage from './Pages/HomePage';
import Search from './Pages/Search';
import NoMatch from './Pages/NoMatch';


export const UserContext = createContext();



function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>


          <Route path="/home">
            <HomePage></HomePage>
          </Route>

          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>

          <Route path="/tour/:place">
            <BookingPage></BookingPage>
          </Route>

          <PrivateRoute path="/booking">
            <Search></Search>
          </PrivateRoute>

          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>


        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
