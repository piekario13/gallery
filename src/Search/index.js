import React, { Component, Fragment } from 'react'
import './search.css'

class Search extends Component {
  render() {
    return (
    <div className="search">
      <input name="HeaderInput" placeholder="Czego szukasz?"/>
      <button type="button" >Szukaj</button>
    </div> )
  }
}

export default Search
