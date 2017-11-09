import React from 'react'

const CarsReviewView = (props) => (
  <div>
    <h2>{props.rating} out of 5</h2>
    <p>{props.comment} - {props.user}</p>
  </div>
)

export default CarsReviewView
