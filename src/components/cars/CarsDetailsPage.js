import React from 'react'

import CarsActions from '../../actions/CarsActions'
import CarsStore from '../../stores/CarsStore'
import CarsDetailsView from './CarsDetailsView'
import CarsReviewPage from './reviews/CarsReviewPage'

class CarsDetailsPage extends React.Component {
  constructor (props) {
    super(props)

    const carId = this.props.match.params.id

    this.state = {
      car: {},
      carId
    }

    this.handleCarsDetailsFetched = this.handleCarsDetailsFetched.bind(this)

    CarsStore.on(
      CarsStore.eventTypes.CAR_DETAILS_FETCHED,
      this.handleCarsDetailsFetched
    )
  }

  componentDidMount () {
    CarsActions.details(this.state.carId)
  }

  componentWillUnmount () {
    CarsStore.removeListener(
      CarsStore.eventTypes.CAR_DETAILS_FETCHED,
      this.handleCarsDetailsFetched
    )
  }

  handleCarsDetailsFetched (car) {
    this.setState({ car })
  }
  render () {
    return (
      <div>
        <h1>Details here</h1>
        <CarsDetailsView {...this.state.car} />
        <CarsReviewPage carId={this.state.carId} />
      </div>
    )
  }
}

export default CarsDetailsPage
