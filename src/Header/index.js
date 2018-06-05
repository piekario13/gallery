import React, { Component, Fragment } from 'react'
import Search from '../Search'
import Filter from '../Filter'
import AddCategory from '../AddCategory'
import './header.css'

class Header extends Component {
  render() {
    let { changeCategory } = this.props
    return (
<<<<<<< HEAD
      <div className="wrap">
        <div className="search">
          <Search />
        </div>
        <div className="filter">
          <Filter changeCategory={changeCategory} />
        </div>
      </div>
=======
      <Fragment>
        <div className="add"><AddCategory /></div>
        <div className="wrap">
          <div className="search"><Search /></div>
          <div className="filter"><Filter /></div>
        </div>
      </Fragment>
>>>>>>> 2ba0d6d94d068890008e743e37180a2a38a65658
    )
  }
}

export default Header
