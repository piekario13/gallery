import React, { Component, Fragment } from 'react'
import './content.css'
import { Items } from '../Stories/Store'

class Content extends Component {
  render() {
    let { category } = this.props
    console.log(category)
    return (
      <div className="Content">
        {Items.map((item, key) => {
          console.log(item.categoryId, category, category === -1 || item.categoryId === category)
          return category === -1 || item.categoryId === parseInt(category) ? (
            <div key={key} className="Item">
              <img src={item.img} alt={item.name} />
              <strong>{item.name}</strong>
              <p>{item.description}</p>
            </div>
          ) : null
        })}
      </div>
    )
  }
}

export default Content
