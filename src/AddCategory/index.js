import React, { Component, Fragment } from 'react'
import Categories from '../Stories/Store'
import './addCategory.css'

class AddCategory extends Component {
  state = {showInput:false}
  setCategoryInput = element => {
    this.categoryInput = element
  }
  add = () => {
    let isExist = false
    Categories.forEach((el)=>el.name.toLowerCase() === this.categoryInput.value.toLowerCase() ? isExist = true : '')
    if (this.categoryInput.value.length && !isExist) {
      Categories.push({
        id: Categories.length,
        name: this.categoryInput.value
      })
      this.setState({
        showInput: false
      })
    } else {
      isExist ? alert("Duplikat") : alert("Podaj nazwę kategorii")
    }
    console.log(Categories)
  }
  showInput = () => {
    let { showInput } = this.state
    this.setState({showInput: !showInput})
  }
  render() {
    let { showInput } = this.state
    return (
      <div className="AddCategory">
        <button type="button" onClick={this.showInput}> {showInput ? "Anuluj" : "Dodaj"} kategorię</button>
        { 
          showInput ? (
            <Fragment>
              <input type="text" name="category" ref={this.setCategoryInput}/>
              <button type="button" onClick={this.add}>Zapisz</button>
            </Fragment>
          ) : ''
        }
      </div>
    )
    
  }
}


export default AddCategory
