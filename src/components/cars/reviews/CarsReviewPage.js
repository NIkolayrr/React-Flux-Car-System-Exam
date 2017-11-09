import React from 'react'
import toastr from 'toastr'
import FormHelpers from '../../common/forms/FormHelpers'
import CarsReviewForm from './CarsReviewForm'

import CarsActions from '../../../actions/CarsActions'
import CarsStore from '../../../stores/CarsStore'
import CarsReviewView from './CarsReviewView'

class CarsReviewPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      review: {
        rating: '',
        comment: ''
      },
      allReviews: [],
      error: ''
    }

    this.handleCarReviewAdded = this.handleCarReviewAdded.bind(this)
    this.handleCarReviewsFetched = this.handleCarReviewsFetched.bind(this)

    CarsStore.on(
      CarsStore.eventTypes.CAR_REVIEW_ADDED,
      this.handleCarReviewAdded
    )

    CarsStore.on(
      CarsStore.eventTypes.CAR_REVIEWS_FETCHED,
      this.handleCarReviewsFetched
    )
  }

  componentDidMount () {
    CarsStore.getReviews(this.props.carId)
  }

  componentWillUnmount () {
    CarsStore.removeListener(
      CarsStore.eventTypes.CAR_REVIEW_ADDED,
      this.handleCarReviewAdded
    )
    CarsStore.removeListener(
      CarsStore.eventTypes.CAR_REVIEWS_FETCHED,
      this.handleCarReviewsFetched
    )
  }

  handleCarReviewsFetched (allReviews) {
    this.setState({ allReviews })
  }

  handleCarReviewAdded (data) {
    if (!data.success) {
      let error = FormHelpers.getFirstError(data)
      this.setState({ error })
    } else {
      const reviews = this.state.allReviews
      reviews.unshift(data.review)
      this.setState({ reviews })
      toastr.success(data.message)
    }
  }

  handleReviewChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'review')
  }

  handleReviewCreated (event) {
    event.preventDefault()

    if (this.state.review.rating < 0 || this.state.review.rating > 5) {
      this.setState({
        error: 'Rating must be between 0 and 5'
      })
      return
    }

    CarsActions.addReview(this.props.carId, this.state.review)
  }

  render () {
    let reviews = 'No reviews'
    if (this.state.allReviews.length > 0) {
      reviews = this.state.allReviews.map((review, index) => (
        <CarsReviewView key={index} {...review} />
      ))
    }
    return (
      <div>
        <h4>Add Review Here</h4>
        <CarsReviewForm
          review={this.state.review}
          error={this.state.error}
          onChange={this.handleReviewChange.bind(this)}
          onSave={this.handleReviewCreated.bind(this)}
        />
        <div>
          {reviews}
        </div>
      </div>
    )
  }
}

export default CarsReviewPage
