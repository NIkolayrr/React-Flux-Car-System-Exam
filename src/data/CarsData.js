import Data from './Data'

const baseUrl = 'cars'

class CarsData {
  static getStats () {
    return Data.get(`stats`)
  }
  static create (car) {
    return Data.post(`${baseUrl}/create`, car, true)
  }
  static allCars (page) {
    page = page || 1
    return Data.get(`${baseUrl}/all?page=${page}`)
  }
  static details (id) {
    return Data.get(`${baseUrl}/details/${id}`, true)
  }
  static addReview (id, review) {
    return Data.post(`${baseUrl}/details/${id}/reviews/create`, review, true)
  }
  static getReviews (id) {
    return Data.get(`${baseUrl}/details/${id}/reviews`, true)
  }
  static getUserCars () {
    return Data.get(`${baseUrl}/mine`, true)
  }
  static addLikes (id) {
    return Data.post(`${baseUrl}/details/${id}/like`, true)
  }
}

export default CarsData
