import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Community from './components/Community';
import Discussion from './components/Discussion';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Courses" component={Courses}/>
          <Route path="/Community" component={Community}/>
          <Route path="/Discussion" component={Discussion}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;