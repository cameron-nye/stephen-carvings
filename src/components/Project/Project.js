import React, { Component } from 'react'

export default class Project extends Component {



  render() {
    console.log(this.props)
    return (
      <div className='project'>
        <div className="projTitle">{this.props.title}</div>
        <div className="mainImage">{this.props.images[0]}</div>
        <div className="projDesc">{this.props.desc}</div>
        <div className="projImages">{this.props.images}</div>
        <div className="price">{this.props.price}</div>
      </div>
    )
  }
}
