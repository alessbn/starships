import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

function Starships(props) {

  return(
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h2>Naves</h2>  
          <ListGroup>
            {props.starships.map(starship =>
              <ListGroup.Item action key={starship.name+1} onClick={()=> props.handleStarships(starship)}>{starship.name}</ListGroup.Item>
              )}
          </ListGroup>
        </div>
      </div>
    </div>
  )
}

export default Starships;