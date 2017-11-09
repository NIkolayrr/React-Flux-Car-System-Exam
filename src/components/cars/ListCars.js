import React from 'react'
import queryString from 'query-string'

import CarsActions from '../../actions/CarsActions'
import CarsStore from '../../stores/CarsStore'
import ListCarView from './ListCarView'

class ListCars extends React.Component {
  constructor (props) {
    super(props)

    const query = queryString.parse(this.props.location.search)
    const page = parseInt(query.page, 10) || 1

    this.state = {
      cars: [],
      searchWord: '',
      page
    }

    this.handleFetchedCars = this.handleFetchedCars.bind(this)

    CarsStore.on(
      CarsStore.eventTypes.ALL_CARS_FETCHED,
      this.handleFetchedCars
    )
  }

  componentWillUnmount () {
    CarsStore.removeListener(
      CarsStore.eventTypes.ALL_CARS_FETCHED,
      this.handleFetchedCars
    )
  }

  componentDidMount () {
    CarsActions.allCars(this.state.page)
  }

  handleFetchedCars (cars) {
    this.setState({ cars })
  }

  goToNextPage () {
    let page = this.state.page
    page++

    if (
      this.state.page.length === 0 ||
      this.state.page.length < 10) {
      return
    }

    this.setState({ page })

    this.props.history.push(`all?page=${page}`)

    CarsActions.allCars(page)
  }

  goToPrevPage () {
    let page = this.state.page
    if (page === 1) {
      return
    }

    page--

    this.setState({ page })
    CarsActions.allCars(page)

    this.props.history.push(`all?page=${page}`)
  }

  handleSearchForm (event) {
    let target = event.target
    let value = target.value

    this.setState({searchWord: value})
  }

  handleSearchSubmit (event) {
    event.preventDefault()

    this.props.history.push(`all?search=${this.state.searchWord}`)
    CarsActions.allCars(this.state.page)
  }

  render () {
    let cars = 'No cars found'
    if (this.state.cars.length > 0) {
      cars = this.state.cars.map(car => (
        <ListCarView key={car.id} {...car} />
      ))
    }
    return (
      <div>
        <h1>All cars here</h1>
        <div>
          <input onChange={this.handleSearchForm.bind(this)} />
          <button onClick={this.handleSearchSubmit.bind(this)}>search</button>
        </div>
        {cars}
        <button onClick={this.goToPrevPage.bind(this)}>Prev</button>
        <button onClick={this.goToNextPage.bind(this)}>Next</button>
      </div>
    )
  }
}

export default ListCars
