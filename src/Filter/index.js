import React, { Component, Fragment } from 'react'
import './filter.css'
import Categories from '../Stories/Store'

class Filter extends Component {
  render() {
    console.log(Categories)
    return (
        <Fragment>
            <select>
                <option value="categories">Kategoria</option>
                <option value="data">Data</option>
                <option value="alphabet">Alfabetycznie</option>
            </select>
            <select>
                {
                    Categories.map((item, id)=>{
                        return <option key={id} value="categories">{item.name}</option>
                    })
                }
            </select>
        </Fragment>
    )
  }
}

export default Filter
