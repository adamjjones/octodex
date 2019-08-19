import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Nav from './components/Nav'
import Body from './components/Body'

class App extends Component {
  render() {
    return (
      <body>
        <Nav />
        <Body />
      </body>
    )
  }
}

export default App
