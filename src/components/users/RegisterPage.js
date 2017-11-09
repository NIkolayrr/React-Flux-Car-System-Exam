import React from 'react'
import toastr from 'toastr'

import FormHelpers from '../common/forms/FormHelpers'
import RegisterForm from './RegisterForm'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'

class RegisterPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {     //  can add default data for testing
        email: 'test@test.com',
        password: '111111',
        confirmPassword: '111111',
        name: 'Test'
      },
      error: ''
    }

    this.handleUserRegistration = this.handleUserRegistration.bind(this)

    UserStore.on(
      UserStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration
    )
  }

  componentWillUnmount () {
    UserStore.removeListener(
      UserStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration
    )
  }

  handleUserChange (e) {
    FormHelpers.handleFormChange.bind(this)(e, 'user')
  }

  handleUserForm (e) {
    e.preventDefault()

    if (!this.validateUser()) {
      return
    }

    UserActions.register(this.state.user)
  }

  handleUserRegistration (data) {
    if (!data.success) {
      let firstError = FormHelpers.getFirstError(data)

      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.props.history.push('/users/login')  //  redirects
    }
  }

  validateUser () {
    const user = this.state.user
    let formIsValid = true
    let error = ''

    if (user.password !== user.confirmPassword) {
      error = 'Password and Confirmation password do not match'
      formIsValid = false
    }

    if (error) {
      this.setState({error})
    }

    return formIsValid
  }

  render () {
    return (
      <div>
        <h1>Register User</h1>
        <RegisterForm
          user={this.state.user}
          error={this.state.error}
          onChange={this.handleUserChange.bind(this)}
          onSave={this.handleUserForm.bind(this)} />
      </div>
    )
  }
}

export default RegisterPage
