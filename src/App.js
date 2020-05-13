import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import  About from './About';
import Page404 from './Page404';

function App() {
  const Home = () => (
    <h1>Hello guys! Let's deal with 404?</h1>
  );
  const About = () => (
    <h1>About this example....</h1>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BrowserRouter>
          <p className="App-intro">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/More">More</Link></li>
            </ul>
          </p>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route component={Page404} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;