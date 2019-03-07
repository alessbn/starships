import React from 'react';
import logo from '../../logo.svg';

function Header() {
  return(
  <header>
    <nav className="navbar navbar-dark bg-dark">
      <div className="col-4">
        <img alt="logo" src={logo} width="30" height="30"/>
      </div>
      <div className="col-8">
      <h1>Starships</h1>
      </div>
    </nav>
  </header>
  );
}

export default Header;