import React, { Component, Fragment } from 'react'
import Search from '../Search'
import Filter from '../Filter'
import './header.css'

class Header extends Component {
  render() {
    let { changeCategory } = this.props
    return (
      <div className="wrap">
        <div className="search">
          <Search />
        </div>
        <div className="filter">
          <Filter changeCategory={changeCategory} />
        </div>
      </div>
    )
  }
}

export default Header
