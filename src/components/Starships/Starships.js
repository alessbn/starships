import React from 'react';

function Starships(props) {

  return(
    <div>
      <h2>Starships</h2>
      <ul>
        {props.starships.map(starship =>
          <li key={starship.name+1} onClick={()=> props.handleStarships(starship)}>{starship.name}</li>
        )}
      </ul>
    </div>
  )
}

export default Starships;