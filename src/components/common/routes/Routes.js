import React from 'react'
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import RegisterPage from '../../users/RegisterPage'
import LoginPage from '../../users/LoginPage'
import LogoutPage from '../../users/LogoutPage'
import CarsHome from '../../cars/CarsHome'
import CreateCarPage from '../../cars/CreateCarPage'
import ListCars from '../../cars/ListCars'
import CarsDetailsPage from '../../cars/CarsDetailsPage'
import UserProfilePage from '../../users/UserProfilePage'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={CarsHome} />
    <Route path='/users/register' component={RegisterPage} />
    <Route path='/users/login' component={LoginPage} />
    <Route path='/cars/all' component={ListCars} />
    <PrivateRoute path='/users/logout' component={LogoutPage} />
    <PrivateRoute path='/cars/create' component={CreateCarPage} />
    <PrivateRoute path='/cars/details/:id' component={CarsDetailsPage} />
    <PrivateRoute path='/cars/mine' component={UserProfilePage} />
  </Switch>
)

export default Routes
