class FormHelpers {
  static handleFormChange (e, stateField) {
    const target = e.target
    const field = target.name
    const value = target.value

    const state = this.state[stateField] // get old user
    state[field] = value          // set given field with new data

    this.setState({[stateField]: state})        // set the updated user
  }

  static getFirstError (data) {
    let firstError = data.message
    if (data.errors) {
      firstError = Object
        .keys(data.errors)
        .map(k => data.errors[k])[0]
    }

    return firstError
  }

  static handleCommentChange (e, stateField) {
    const target = e.target
    const field = target.name
    const value = target.value

    const state = this.state
    state[field] = value

    this.setState({[stateField]: value})
  }
}

export default FormHelpers
