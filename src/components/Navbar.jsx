import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <h1 className="navbar-brand">WikiCountries</h1>
      </div>
    </nav>
  );
}
