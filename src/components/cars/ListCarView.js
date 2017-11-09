import React from 'react'
import {Link} from 'react-router-dom'

const ListCarView = (props) => (
  <div className='listCarView'>
    <h4>{props.id} - {props.make} {props.model} <Link to={`/cars/details/${props.id}`}>View details</Link></h4>
    <img src={props.image} alt={props.make + ' ' + props.model} />
  </div>
)

export default ListCarView
