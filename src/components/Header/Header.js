import React from 'react';
import logo from '../../logo.svg';

function Header() {
  return(
  <header>
    <nav className="navbar navbar-dark bg-dark">
      <img alt="logo" src={logo} width="30" height="30"/>
      <h1>Starships</h1>
    </nav>
  </header>
  );
}

export default Header;