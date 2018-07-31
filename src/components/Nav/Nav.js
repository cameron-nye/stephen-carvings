import React, { Component } from 'react'
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
    console.log(this.state)
    return (
      <div className={this.state.toggleMenu ? "navClosed" : "nav"}>
        <div id="hamMenu" onClick={() => this.toggleMenuFn()}>
          <span className={this.state.toggleMenu ? "line line01" : "line line01closed"}/>
          <span className={this.state.toggleMenu ? "line line02" : "line line02closed"}/>
          <span className={this.state.toggleMenu ? "line line03" : "line line03closed"}/>
        </div>
      </div>
    )
  }
}
