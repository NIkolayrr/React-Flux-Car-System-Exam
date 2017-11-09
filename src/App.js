import React from 'react'
import Navbar from './components/common/Navbar'
import Routes from './components/common/routes/Routes'
import './App.css'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default App
