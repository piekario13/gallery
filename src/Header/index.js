import React, { Component, Fragment } from 'react'
import Search from '../Search'
import Filter from '../Filter'
import AddCategory from '../AddCategory'
import './header.css'

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="add"><AddCategory /></div>
        <div className="wrap">
          <div className="search"><Search /></div>
          <div className="filter"><Filter /></div>
        </div>
      </Fragment>
    )
  }
}

export default Header
