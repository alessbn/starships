import React, { Component } from 'react';
import NavCol from '../Nav/NavCol';
import Movies from '../Movies/Movies';
import Starships from '../Starships/Starships';
import Info from '../Info/Info';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      starships: [],
      info: {},
      error: null,
      isLoading: true,
      displayMovies: true,
      displayStarships: false,
      displayInfo: false,
    }
    this.handleClickMovies = this.handleClickMovies.bind(this);
    this.handleClickStarships = this.handleClickStarships.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
  }

  handleClickMenu(eventKey) {
    switch (eventKey){
      case 'home-menu':
        this.setState({
          displayMovies: true,
          displayStarships: false,
          displayInfo: false,
        });
        break;
      case 'starships-menu':
        this.setState({
          displayMovies: false,
          displayStarships: true,
          displayInfo: false,
        });
        break;
      case 'info-menu':
        this.setState({
          displayMovies: false,
          displayStarships: false,
          displayInfo: true,
        });
        break;
      default:
        break;
    }
  }

  handleClickMovies(handleMovies) {
    Promise.all(handleMovies.map(url => fetch(url)))
      .then(response => Promise.all(response.map(r => r.json())))
      .then(result => {
        this.setState({ 
        starships: result,
        isLoading: false,
        displayMovies: false,
        displayStarships: true,
        displayInfo: false,
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
      info: handleStarships,
      displayMovies: false,
      displayStarships: false,
      displayInfo: true,
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
      <div className="container-fluid">
        <div className="flex-xl-nowrap row">
          <NavCol handleMenu={this.handleClickMenu} />
          {this.state.displayMovies ? <Movies movies={movies} handleMovies={this.handleClickMovies} /> : null}
          {this.state.displayStarships ? <Starships starships={starships} handleStarships={this.handleClickStarships} /> : null}
          {this.state.displayInfo ? <Info info={info}/>  : null}
        </div>
      </div>
    )
  }
}

export default Main;