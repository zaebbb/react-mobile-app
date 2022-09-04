import './App.css';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Modal from "./components/Modal";
import Login from "./components/pages/Login";
import Devices from "./components/pages/Devices";
import Room from "./components/pages/Room";
import Macros from "./components/pages/Macros";
import React from "react";

function App() {
  return (
      <>
        <Router>
          <Navbar />
            <Switch>
                <Route
                path="/api/"
                exact
                component={Home}
                />
                <Route
                path="/api/login"
                exact
                component={Login}
                />
                <Route
                path="/api/devices"
                exact
                component={Devices}
                />
                <Route
                path="/api/macros"
                exact
                component={Macros}
                />
                <Route
                path="/api/rooms/1"
                exact
                component={Room}
                />
                <Route
                path="/api/rooms/2"
                exact
                component={Room}
                />
                <Redirect
                from="/"
                exact
                to='/api/'
                />
            </Switch>
          <Footer />
          <Modal />
        </Router>

    </>
  );
}

export default App;
