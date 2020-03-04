import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import AfterLogin from './components/AfterLogin';
import MyTicket from './components/MyTicket';
import Payment from './components/Payment';
import TicketDetail from './components/Payment';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/afterlogin'>
            <AfterLogin />
          </Route>
          <Route path='/myticket'>
            <MyTicket />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route path='/ticketdetail'>
            <TicketDetail />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
