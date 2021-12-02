// src/App.js
import { useState } from 'react';
import './App.css';
import countriesJSON from './countries.json';
import {Route} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import CountriesList from './components/CountriesList.jsx';
import CountryDetails from './components/CountryDetails.jsx'

export default function App() {
  const countries = countriesJSON;
  return (
    <div className="App">
      <Navbar />
      <Router>
          <Route path={'/'} render={(props) => <CountriesList {...props} countries={countries}/>} />
          <Route path={'/:id'} render={(props) => <CountryDetails {...props} countries={countries}/>}/>
      </Router>
    </div>
  );
}
