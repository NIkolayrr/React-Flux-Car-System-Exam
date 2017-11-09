import React from 'react'

import CarsActions from '../../actions/CarsActions'
import CarsStore from '../../stores/CarsStore'

class CarsLikePage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      likes: 0
    }
    this.handleAddedLike = this.handleAddedLike.bind(this)
    CarsStore.on(
      CarsStore.eventTypes.ADDED_CAR_LIKES,
      this.handleAddedLike
    )
  }

  componentWillUnmount () {
    CarsStore.removeListener(
      CarsStore.eventTypes.ADDED_CAR_LIKES,
      this.handleAddedLike
    )
  }

  handleAddedLike (data) {
    console.log(data)
  }

  addLikes () {
    CarsActions.addLikes(this.props.carId)
  }

  render () {
    return (
      <div>
        <h2>likes: {this.state.likes}</h2>
        <button>Like</button>
      </div>
    )
  }
}

export default CarsLikePage
