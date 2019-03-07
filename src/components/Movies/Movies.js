import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Movies(props) {

  return(
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h2 className="title">Películas Star Wars</h2>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Título</th>
                <th>Director</th>
                <th>Fecha estreno</th>
                <th>Consultar</th>
              </tr>
            </thead>
            <tbody>
              {props.movies.map(movie => 
                <tr key={movie.episode_id}>
                  <th>{movie.title}</th>
                  <th>{movie.director}</th>
                  <th>{movie.release_date}</th>
                  <th><Button variant="info" onClick={()=> props.handleMovies(movie.starships)}>Consultar</Button></th>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Movies;