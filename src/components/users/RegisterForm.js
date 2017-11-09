import React from 'react'
import Input from '../common/forms/Input'

const RegisterForm = (props) => (
  <form>
    <div>{props.error}</div>

    <Input
      name='email'
      type='email'
      placeholder='E-mail'
      value={props.user.email}
      onChange={props.onChange} />

    <Input
      name='password'
      type='password'
      placeholder='Password'
      value={props.user.password}
      onChange={props.onChange} />

    <Input
      name='confirmPassword'
      type='password'
      placeholder='Confirm Password'
      value={props.user.confirmPassword}
      onChange={props.onChange} />

    <Input
      name='name'
      type='text'
      placeholder='Name'
      value={props.user.name}
      onChange={props.onChange} />

    <input type='submit' onClick={props.onSave} />
  </form>
)

export default RegisterForm
