import React from 'react';
import Form from '../Form/Form';

function Info(props){
  return(
    <div>
      <h2>Información</h2>
      <div>
        <ul>
          <li>Nombre:{props.info.name} </li>
          <li>Modelo:{props.info.model}</li>
          <li>Fabricante:{props.info.manufacturer}</li>
          <li>Costo:{props.info.cost_in_credits}</li>
          <li>Longitud:{props.info.length}</li>
          <li>Velocidad atmosférica máxima:{props.info.max_atmosphering_speed}</li>
          <li>Triplación:{props.info.crew}</li>
          <li>Pasajeros:{props.info.passengers}</li>
          <li>Capacidad de carga:{props.info.cargo_capacity}</li>
          <li>Consumibles:{props.info.consumables}</li>
          <li>Calificación de hiperimpulsión:{props.info.hyperdrive_rating}</li>
          <li>MGLT:{props.info.MGLT}</li>
          <li>Clase de nave:{props.info.starship_class}</li>
        </ul>
        <button>Modificar</button>
        <Form />
      </div>
    </div>
  )
}

export default Info;