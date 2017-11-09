import dispatcher from '../dispatcher'

const CarsActions = {
  types: {
    GET_STATS: 'GET_STATS',
    CREATE_CAR: 'CREATE_CAR',
    ALL_CARS: 'ALL_CARS',
    GET_CAR_DETAILS: 'GET_CAR_DETAILS',
    ADD_CAR_REVIEW: 'ADD_CAR_REVIEW',
    GET_CAR_REVIEWS: 'GET_CAR_REVIEWS',
    GET_USER_CARS: 'GET_USER_CARS',
    ADD_CAR_LIKES: 'ADD_CAR_LIKES'
  },
  getStats () {
    dispatcher.dispatch({
      type: this.types.GET_STATS
    })
  },
  create (car) {
    dispatcher.dispatch({
      type: this.types.CREATE_CAR,
      car
    })
  },
  allCars (page) {
    page = page || 1
    dispatcher.dispatch({
      type: this.types.ALL_CARS,
      page
    })
  },
  details (id) {
    dispatcher.dispatch({
      type: this.types.GET_CAR_DETAILS,
      id
    })
  },
  addReview (id, review) {
    dispatcher.dispatch({
      type: this.types.ADD_CAR_REVIEW,
      id,
      review
    })
  },
  getReviews (id) {
    dispatcher.dispatch({
      type: this.types.GET_CAR_REVIEWS,
      id
    })
  },
  getUserCars () {
    dispatcher.dispatch({
      type: this.types.GET_USER_CARS
    })
  },
  addLikes (id) {
    dispatcher.dispatch({
      type: this.types.ADD_CAR_LIKES,
      id
    })
  }
}

export default CarsActions
