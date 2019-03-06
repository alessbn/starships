import React, { Component } from 'react';
import Movies from '../Movies/Movies';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      error: null,
      isLoading: true,
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(data =>
        this.setState({ 
          movies: data.results,
          isLoading: false,
        })
      )
      .catch(error => 
        this.setState({
          error,
          isLoading: false,
        })
      )
  }

  render() {
    const { movies, isLoading, error } = this.state;
    if(isLoading){
      return <p>Cargando...</p>
    }
    if(error){
      return <p>{error.message}</p>
    }
    return(
      <div>
        <Movies movies={movies} />
      </div>
    )
  }
}

export default Main;