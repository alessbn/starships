import React from 'react';
import Nav from 'react-bootstrap/Nav';

function NavCol(props) {
  return(
    <aside>
      <Nav className="flex-column menu" onSelect={k => props.handleMenu(k)}>
        <Nav.Item>
          <Nav.Link eventKey="home-menu">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="starships-menu">Naves</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="info-menu">Información</Nav.Link>
        </Nav.Item>
      </Nav>
    </aside>
  );
}

export default NavCol;