import React from 'react'

// Components
import { Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import LoginPage from './Components/LoginPage'

const App = props => 
  <div className="ui container">
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
  </div>

export default App
