import React, { Component } from 'react';

class Form extends Component{
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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Nombre</label>
          <input type="text" value={this.state.nombre} id="nombre" onChange={this.handleChange} required />
          <label htmlFor="">Costo</label>
          <input type="text" value={this.state.costo} id="costo" onChange={this.handleChange} required/>
          <label htmlFor="">Pasajeros</label>
          <input type="text" value={this.state.pasajeros} id="pasajeros" onChange={this.handleChange} required/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default Form;