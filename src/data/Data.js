import Auth from '../components/users/Auth'

const baseUrl = 'http://localhost:5000/'

const getOptions = () => ({
  mode: 'cors',  // call to remote server (because i am on localhost:3000)
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const handleJsonResponse = res => res.json()

const applyAuthorizationHeader = (options, authenticated) => {
  if (authenticated) {
    options.headers.Authorization = `bearer ${Auth.getToken()}`
  }
}

class Data {
  static get (url, authenticated) {
    let options = getOptions()
    options.method = 'get'

    applyAuthorizationHeader(options, authenticated)

    return window.fetch(`${baseUrl}${url}`, options)
      .then(handleJsonResponse)
  }

  static post (url, data, authenticated) {
    let options = getOptions()
    options.method = 'post'
    options.body = JSON.stringify(data)

    applyAuthorizationHeader(options, authenticated)

    return window.fetch(`${baseUrl}${url}`, options)
      .then(handleJsonResponse)
  }

  static postComment (url, data, authenticated) {
    let options = getOptions()
    options.method = 'post'
    options.body = JSON.stringify({'message': data})

    applyAuthorizationHeader(options, authenticated)

    return window.fetch(`${baseUrl}${url}`, options)
      .then(handleJsonResponse)
  }
}

export default Data
