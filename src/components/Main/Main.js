import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import Starships from '../Starships/Starships';
import Info from '../Info/Info';
import Form from '../Form/Form';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      starships: [],
      info: {},
      error: null,
      isLoading: true,
    }
    this.handleClickMovies = this.handleClickMovies.bind(this);
    this.handleClickStarships = this.handleClickStarships.bind(this);
  }

  handleClickMovies(handleMovies) {
    Promise.all(handleMovies.map(url => fetch(url)))
      .then(response => Promise.all(response.map(r => r.json())))
      .then(result => {
        this.setState({ 
        starships: result,
        isLoading: false,
        })
      })
      .catch(error => 
        this.setState({
          error,
          isLoading: false,
        })
      );
  }

  handleClickStarships(handleStarships) {
    this.setState({
      info: handleStarships
    })
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
    const { movies, starships, info, isLoading, error } = this.state;
    if(isLoading){
      return <p>Cargando...</p>
    }
    if(error){
      return <p>{error.message}</p>
    }
    return(
      <div>
        <Movies movies={movies} handleMovies={this.handleClickMovies} />
        <Starships starships={starships} handleStarships={this.handleClickStarships} />
        <Info info={info}/>
        <Form info={info}/>
      </div>
    )
  }
}

export default Main;