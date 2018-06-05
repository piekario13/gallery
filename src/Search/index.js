import React, { Component, Fragment } from 'react'
import './search.css'

class Search extends Component {
  state = { showInput: false, showButton: false }
  render() {
    let { showInput, showButton } = this.state
    return (
      <div className="search">
        <input name="HeaderInput" placeholder="Czego szukasz?" />
        <button type="button">Szukaj</button>
      </div>
    )
  }
}

export default Search
