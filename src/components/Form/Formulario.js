import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Formulario extends Component{
  constructor(props){
    super(props);
    this.state = {
      nombre: "",
      costo: "",
      pasajeros: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  handleChange(e){
    switch (e.target.id){
      case 'nombre':
        this.setState({nombre: e.target.value});
        break;
      case 'costo':
        this.setState({costo: e.target.value});
        break;
      case 'pasajeros':
        this.setState({pasajeros: e.target.value});
        break;
      default:
        break;
    }
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.nombre);
    console.log(this.state.costo);
    console.log(this.state.pasajeros);
  }

  render(){
    return(
      <div>
        <h2>Crear nave</h2>
        <Modal.Dialog>
          <Form onSubmit={this.handleSubmit}>
            <Form.Label column sm="2">Nombre</Form.Label>
            <Col sm="10">
              <Form.Control type="text" value={this.state.nombre} id="nombre" onChange={this.handleChange} required placeholder="Nombre de la nave" />
            </Col>
            <Form.Label column sm="2">Costo</Form.Label>
            <Col sm="10">
              <Form.Control type="text" value={this.state.costo} id="costo" onChange={this.handleChange} required placeholder="Costo de la nave" />
            </Col>
            <Form.Label column sm="2">Pasajeros</Form.Label>
            <Col sm="10">
              <Form.Control  type="text" value={this.state.pasajeros} id="pasajeros" onChange={this.handleChange} required placeholder="Número de Pasajeros" />
            </Col>
            <Col sm="2">
              <Button className="button-form" variant="info" type="submit">Enviar</Button>
            </Col>
          </Form>
        </Modal.Dialog>
      </div>

    )
  }
}

export default Formulario;