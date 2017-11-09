import React from 'react'
import Input from '../common/forms/Input'

const CreateCarForm = (props) => (
  <form>
    <div>{props.error}</div>
    <div>{props.error}</div>
    <Input
      name='make'
      placeholder='Make'
      value={props.car.make}
      onChange={props.onChange} />
    <Input
      name='model'
      placeholder='Model'
      value={props.car.model}
      onChange={props.onChange}
    />
    <Input
      name='year'
      type='number'
      placeholder='Year'
      value={props.car.year}
      onChange={props.onChange}
    />
    <Input
      name='engine'
      placeholder='Engine'
      value={props.car.engine}
      onChange={props.onChange}
    />
    <Input
      name='price'
      type='number'
      placeholder='Price'
      value={props.car.price}
      onChange={props.onChange}
    />
    <Input
      name='image'
      type='url'
      placeholder='Image'
      value={props.car.image}
      onChange={props.onChange}
    />
    <Input
      name='mileage'
      type='number'
      placeholder='Mileage'
      value={props.car.mileage}
      onChange={props.onChange}
    />
    <br />
    <input type='submit' onClick={props.onSave} />
  </form>
)

export default CreateCarForm
