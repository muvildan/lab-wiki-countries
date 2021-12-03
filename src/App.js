// src/App.js
import './App.css';
import countriesJSON from './countries.json';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import CountriesList from './components/CountriesList.jsx';
import CountryDetails from './components/CountryDetails.jsx';
import ErrorPage from './components/ErrorPage';

export default function App() {
  const countries = countriesJSON;

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Router>
          <Switch>
          <div className="d-flex">
            <Route 
              path={'/'}
              render={(props) => (
                <CountriesList {...props} countries={countries} />
              )}
            />
            <Route 
              className="position-fixed"
              path={'/:id'}
              render={(props) => (
                <CountryDetails {...props} countries={countries} />
              )}
            />
            <Route component={ErrorPage} />
            </div>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
