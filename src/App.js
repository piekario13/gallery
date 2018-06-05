import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    category: -1
  }

  changeCategory = event => {
    this.setState({ category: event.target.value })
  }

  render() {
    let { category } = this.state
    return (
      <div className="App">
        <Header changeCategory={this.changeCategory} />
        <Content category={category} />
      </div>
    )
  }
}

export default App
