import React from 'react'
import Auth from './Auth'
import LoginForm from './LoginForm'
import FormHelpers from '../common/forms/FormHelpers'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'
import toastr from 'toastr'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {   //  can add default data for testing
      user: {
        email: 'test@test.com',
        password: '111111'
      },
      error: ''
    }

    this.handleUserLogin = this.handleUserLogin.bind(this)

    UserStore.on(
      UserStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin)
  }

  componentWillUnmount () {
    UserStore.removeListener(
      UserStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin)
  }

  handleUserChange (e) {
    FormHelpers.handleFormChange.bind(this)(e, 'user')
  }

  handleUserForm (e) {
    e.preventDefault()

    //  validate Form

    UserActions.login(this.state.user)
  }

  handleUserLogin (data) {
    if (!data.success) {
      this.setState({error: data.message})
    } else {
      Auth.authenticateUser(data.token)
      Auth.saveUser(data.user)
      toastr.success(data.message)
      this.props.history.push('/')
    }
  }

  render () {
    return (
      <div>
        <h1>Login into your Account</h1>
        <LoginForm
          user={this.state.user}
          error={this.state.error}
          onChange={this.handleUserChange.bind(this)}
          onSave={this.handleUserForm.bind(this)} />
      </div>
    )
  }
}

export default LoginPage
