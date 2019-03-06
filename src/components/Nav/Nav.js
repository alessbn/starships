import React from 'react';

function Nav(props) {
  return(
    <aside>
      <ul>
        <li id="home-menu" onClick={props.handleMenu}>Home</li>
        <li id="starships-menu" onClick={props.handleMenu}>Starships</li>
        <li id="info-menu" onClick={props.handleMenu}>Información</li>
      </ul>
    </aside>
  );
}

export default Nav;