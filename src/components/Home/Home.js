import React, { Component } from 'react'
//Style
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className="titleCont">
          <p className='title'>Birds <span>from the</span> Heart</p>
          <p className='subtitle'>The work of Stephen Nye</p>
        </div>
      </div>
    )
  }
}
