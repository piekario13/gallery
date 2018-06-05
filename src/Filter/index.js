import React, { Component, Fragment } from 'react'
import './filter.css'
import Categories from '../Stories/Store'

class Filter extends Component {
<<<<<<< HEAD
  render() {
    let { changeCategory } = this.props
    return (
      <Fragment>
        <select>
          <option value="categories">Kategoria</option>
          <option value="data">Data</option>
          <option value="alphabet">Alfabetycznie</option>
        </select>
        <select onChange={event => changeCategory(event)}>
          {Categories.map((item, id) => {
            return (
              <option key={id} value={item.id}>
                {item.name}
              </option>
            )
          })}
        </select>
      </Fragment>
    )
  }
=======
    constructor(props){
        super(props)

        this.state={
            currentType:''
        }
        this.setFilterType = this.setFilterType.bind(this)
    }
    setFilterType(event){
        this.setState({
            currentType:event.target.value
        })
    }
    render() {
        console.log(Categories)
        return (
            <Fragment>
                <select onChange={this.setFilterType}>
                    <option>Wybierz</option>
                    <option value="categories">Kategoria</option>
                    <option value="data">Data</option>
                    <option value="alphabet">Alfabetycznie</option>
                </select>
                {
                    this.state.currentType === "categories" ? 
                        <select>
                            {
                                Categories.map((item, id) => {
                                    return (
                                        <option key={id} value={item.id}>
                                            {item.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    
                    : ''
                }
            </Fragment>
        )
    }
>>>>>>> 2ba0d6d94d068890008e743e37180a2a38a65658
}

export default Filter
