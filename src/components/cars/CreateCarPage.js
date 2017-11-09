import React from 'react'
import toastr from 'toastr'
import FormHelpers from '../common/forms/FormHelpers'
import CreateCarForm from './CreateCarForm'

import CarsActions from '../../actions/CarsActions'
import CarsStore from '../../stores/CarsStore'

class CreateCarPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      car: {
        make: 'Mercedess',
        model: 'benz',
        year: 2017,
        engine: '6.0',
        price: '350000',
        image: 'https://www.mercedes-benz.bg/content/media_library/hq/hq_mpc_reference_site/passenger_cars_ng/new_cars/models/c-class/c205/modelnavigation/model_navigation_mercedes-benz-c-class-c205_960x298_11-2015_jpg.object-Single-MEDIA.tmp/model_navigation_mercedes-benz-c-class-c205_960x298_11-2015.jpg',
        mileage: '0'
      },
      error: ''
    }

    this.handleCreatedCar = this.handleCreatedCar.bind(this)

    CarsStore.on(
      CarsStore.eventTypes.CAR_CREATED,
      this.handleCreatedCar
    )
  }

  componentWillUnmount () {
    CarsStore.removeListener(
      CarsStore.eventTypes.CAR_CREATED,
      this.handleCreatedCar
    )
  }

  handleCreatedCar (data) {
    console.log(data)
    if (!data.success) {
      let error = FormHelpers.getFirstError(data)
      this.setState({ error })
    } else {
      toastr.success(data.message)
      this.props.history.push('all')
    }
  }

  handleCarChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'car')
  }

  handleCarCreated (event) {
    event.preventDefault()

    let formIsValid = true
    let error = ''
    let car = this.state.car
    let year = parseInt(car.year, 10)

    if (!car.make) {
      error = 'Make is required'
      formIsValid = false
    } else if (year < 1901 && year > 2019) {
      error = 'Year must be between 1901 and 2018'
      formIsValid = false
    }

    if (!formIsValid) {
      this.setState({ error })
      return
    }

    CarsActions.create(this.state.car)
  }

  render () {
    return (
      <div>
        <h4>Create car page</h4>
        <CreateCarForm
          car={this.state.car}
          error={this.state.error}
          onChange={this.handleCarChange.bind(this)}
          onSave={this.handleCarCreated.bind(this)}
        />
      </div>
    )
  }
}

export default CreateCarPage
