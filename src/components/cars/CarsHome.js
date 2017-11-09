import React from 'react'
import CarsActions from '../../actions/CarsActions'
import CarsStore from '../../stores/CarsStore'

class CarsHome extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      stats: {}
    }
    this.handleStatsFetched = this.handleStatsFetched.bind(this)

    CarsStore.on(
      CarsStore.eventTypes.STATS_FETCHED,
      this.handleStatsFetched
    )
  }
  componentWillUnmount () {
    CarsStore.removeListener(
      CarsStore.eventTypes.STATS_FETCHED,
      this.handleStatsFetched
    )
  }
  componentDidMount () {
    CarsActions.getStats()
  }
  handleStatsFetched (stats) {
    this.setState({ stats })
  }
  render () {
    return (
      <div>
        <h2>Welcome home</h2>
        <h4>{this.state.stats.cars} - cars on the site</h4>
        <h4>{this.state.stats.users} - users on the site</h4>
      </div>
    )
  }
}

export default CarsHome
