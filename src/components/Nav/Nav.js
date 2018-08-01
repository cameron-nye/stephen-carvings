import React, { Component } from 'react'
import {Link} from 'react-router-dom'
//Style
import './Nav.css'

export default class Nav extends Component {
  constructor(){
    super()
    this.state = {
      toggleMenu: true
    }
  }

  toggleMenuFn(){
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }

  render() {
    return (
      <div className={this.state.toggleMenu ? "nav closed" : "nav"}>
        <div id="hamMenu" onClick={() => this.toggleMenuFn()}>
          <span className={this.state.toggleMenu ? "line line01" : "line line01closed"}/>
          <span className={this.state.toggleMenu ? "line line02" : "line line02closed"}/>
          <span className={this.state.toggleMenu ? "line line03" : "line line03closed"}/>
        </div>
        <div className={this.state.toggleMenu ? "menuItems closedMenu" : "menuItems"}>
          <Link to='/' onClick={() => this.toggleMenuFn()}><li>Home</li></Link>
          <Link to='/projects' onClick={() => this.toggleMenuFn()}><li>Projects</li></Link>
          <Link to='/biography' onClick={() => this.toggleMenuFn()}><li>Biography</li></Link>
          <Link to='/contact' onClick={() => this.toggleMenuFn()}><li>Contact</li></Link>
        </div>
      </div>
    )
  }
}
