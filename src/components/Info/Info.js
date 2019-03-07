import React, { Component } from 'react';
import Formulario from '../Form/Formulario';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './info.css';

class Info extends Component{
  constructor(props){
    super(props);
    this.state = {
      displayForm: false,
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow(){
    this.setState({
      displayForm: true,
    })
  }

  handleHide(){
    this.setState({
      displayForm: false,
    })
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h2>Información de la nave</h2>
            <ListGroup>
              <ListGroup.Item><span>Nombre: </span> {this.props.info.name}</ListGroup.Item>
              <ListGroup.Item><span>Modelo: </span> {this.props.info.model}</ListGroup.Item>
              <ListGroup.Item><span>Fabricante: </span> {this.props.info.manufacturer}</ListGroup.Item>
              <ListGroup.Item><span>Costo: </span> {this.props.info.cost_in_credits}</ListGroup.Item>
              <ListGroup.Item><span>Longitud: </span> {this.props.info.length}</ListGroup.Item>
              <ListGroup.Item><span>Velocidad atmosférica máxima: </span> {this.props.info.max_atmosphering_speed}</ListGroup.Item>
              <ListGroup.Item><span>Triplación: </span> {this.props.info.crew}</ListGroup.Item>
              <ListGroup.Item><span>Pasajeros: </span> {this.props.info.passengers}</ListGroup.Item>
              <ListGroup.Item><span>Capacidad de carga: </span> {this.props.info.cargo_capacity}</ListGroup.Item>
              <ListGroup.Item><span>Consumibles: </span> {this.props.info.consumables}</ListGroup.Item>
              <ListGroup.Item><span>Calificación de hiperimpulsión: </span> {this.props.info.hyperdrive_rating}</ListGroup.Item>
              <ListGroup.Item><span>MGLT: </span> {this.props.info.MGLT}</ListGroup.Item>
              <ListGroup.Item><span>Clase de nave: </span> {this.props.info.starship_class}</ListGroup.Item>
            </ListGroup>
            <Button className="button-info" variant="info" type="submit" onClick={this.handleShow}>Crear nave</Button>
          </div>
          <div className="col-sm">
            {this.state.displayForm?<Formulario handleClickHide={this.handleHide} />:null}
          </div>
        </div>
      </div>
    )
  }
}

export default Info;