import React from 'react'
import Input from '../../common/forms/Input'

const CarsReviewForm = (props) => (
  <form>
    <div>{props.error}</div>
    <Input
      name='rating'
      type='number'
      placeholder='Rating'
      value={props.review.rating}
      onChange={props.onChange} />
    <Input
      name='comment'
      placeholder='Comment'
      value={props.review.comment}
      onChange={props.onChange}
    />
    <input type='submit' onClick={props.onSave} />
  </form>
)

export default CarsReviewForm
