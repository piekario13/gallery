import React, { Component, Fragment } from 'react'
import './addCategory.css'

class AddCategory extends Component {
  render() {
    return (
    <div className="AddCategory">
      <input name="AddInput"/>
      <button type="button">Dodaj kategorię</button>
    </div> )
  }
}

export default AddCategory
