import React from 'react'
import CarsLikePage from './CarsLikePage'

const CarsDetailsView = (props) => (
  <div>
    <h3>{props.make} {props.model}</h3>
    <h4>year: {props.year}</h4>
    <h4>engine: {props.engine} L</h4>
    <h4>mileage: {props.mileage}</h4>
    <h4>price $ {props.price}</h4>
    <img src={props.image} alt={props.make + ' ' + props.model} />
    <CarsLikePage carId={props.id} />
  </div>
)

export default CarsDetailsView
