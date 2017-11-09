import { EventEmitter } from 'events'
import CarsActions from '../actions/CarsActions'
import dispatcher from '../dispatcher'
import CarsData from '../data/CarsData'

class CarsStore extends EventEmitter {
  getStats () {
    CarsData
    .getStats()
    .then(data => this.emit(this.eventTypes.STATS_FETCHED, data))
  }
  create (car) {
    CarsData
      .create(car)
      .then(data => this.emit(this.eventTypes.CAR_CREATED, data))
  }
  allCars (page) {
    CarsData
      .allCars(page)
      .then(data => this.emit(this.eventTypes.ALL_CARS_FETCHED, data))
  }
  details (id) {
    CarsData
      .details(id)
      .then(data => this.emit(this.eventTypes.CAR_DETAILS_FETCHED, data))
  }
  addReview (id, review) {
    CarsData
      .addReview(id, review)
      .then(data => this.emit(this.eventTypes.CAR_REVIEW_ADDED, data))
  }
  getReviews (id) {
    CarsData
      .getReviews(id)
      .then(data => this.emit(this.eventTypes.CAR_REVIEWS_FETCHED, data))
  }
  getUserCars (id) {
    CarsData
      .getUserCars()
      .then(data => this.emit(this.eventTypes.USER_CARS_FETCHED, data))
  }
  addLikes (id) {
    CarsData
      .addLikes(id)
      .then(data => this.emit(this.eventTypes.ADD_CAR_LIKES, data))
  }
  handleAction (action) {
    switch (action.type) {
      case CarsActions.types.GET_STATS: {
        this.getStats()
        break
      }
      case CarsActions.types.CREATE_CAR: {
        this.create(action.car)
        break
      }
      case CarsActions.types.ALL_CARS: {
        this.allCars(action.page)
        break
      }
      case CarsActions.types.GET_CAR_DETAILS: {
        this.details(action.id)
        break
      }
      case CarsActions.types.ADD_CAR_REVIEW: {
        this.addReview(action.id, action.review)
        break
      }
      case CarsActions.types.GET_CAR_REVIEWS: {
        this.getReviews(action.id)
        break
      }
      case CarsActions.types.GET_USER_CARS: {
        this.getUserCars()
        break
      }
      case CarsActions.types.ADD_CAR_LIKES: {
        this.addLikes(action.id)
        break
      }
      default:
        break
    }
  }
}

let carsStore = new CarsStore()

carsStore.eventTypes = {
  STATS_FETCHED: 'stats_fetched',
  CAR_CREATED: 'car_created',
  ALL_CARS_FETCHED: 'all_cars_fetched',
  CAR_DETAILS_FETCHED: 'car_details_fetched',
  CAR_REVIEW_ADDED: 'car_review_added',
  CAR_REVIEWS_FETCHED: 'car_reviews_fetched',
  USER_CARS_FETCHED: 'user_cars_fetched',
  ADDED_CAR_LIKES: 'added_car_likes'
}

dispatcher.register(carsStore.handleAction.bind(carsStore))

export default carsStore
