import React, { Component } from 'react';
import './App.css';
import Home from './home/Home';
import About from '../src/about/About';
import News from '../src/news/News'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
 
class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <div>
            <Switch>
              <Route path="/about" component={About}/>
              <Route path="/News" component={News}/>
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
