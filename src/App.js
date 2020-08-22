import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import TopNews from './components/news/TopNews';
import Sports from './components/news/Sports'
import Tennis from './components/news/Tennis'
import Sport from './components/news/Sport'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <section className='container'>
        <Switch>
          <Route exact path='/' component={Sport } />
          <Route exact path='/topNews' component={TopNews } />
          <Route exact path='/football' component={Sports } />
          <Route exact path='/tennis' component={Tennis } />
        </Switch>
      </section>
    </Router>
 </div>
  );
}

export default App;
