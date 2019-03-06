import React from 'react';

function Movies(props) {

  return(
    <div>
      <h2>Películas</h2>
      <table>
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
              <th><button>Consultar</button></th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Movies;