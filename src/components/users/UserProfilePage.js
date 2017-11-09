import React from 'react'
import CarsActions from '../../actions/CarsActions'
import CarsStore from '../../stores/CarsStore'

class UserProfilePage extends React.Component {
  constructor (props) {
    super(props)

    this.sate = {
      cars: []
    }

    this.handleUserCars = this.handleUserCars.bind(this)

    CarsStore.on(
      CarsStore.eventTypes.USER_CARS_FETCHED,
      this.handleUserCars
    )
  }

  componentWillUnmount () {
    CarsStore.removeListener(
      CarsStore.eventTypes.USER_CARS_FETCHED,
      this.handleUserCars
    )
  }

  componentDidMount () {
    CarsActions.getUserCars()
  }

  handleUserCars (data) {
    this.setState({ cars: data })
  }

  render () {
    return (
      <div>
        <h3>cars</h3>
      </div>
    )
  }
}

export default UserProfilePage
