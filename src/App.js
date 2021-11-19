import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import AddServices from './Pages/AddServices/AddServices';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import MyOrders from './Pages/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/addaNewService">
              <AddServices />
            </Route>
            <Route path="/myOrders">
              <MyOrders />
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking />
            </PrivateRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
