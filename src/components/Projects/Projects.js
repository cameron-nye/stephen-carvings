import React, { Component } from 'react'
//Components
import Project from '../Project/Project'
//Style
import './Projects.css'
//Images
import WP1 from '../../images/Woodpecker/WP1.JPG'
import WP2 from '../../images/Woodpecker/WP2.JPG'
import WP3 from '../../images/Woodpecker/WP3.JPG'
import WP4 from '../../images/Woodpecker/WP4.JPG'
import WP5 from '../../images/Woodpecker/WP5.JPG'
import WP6 from '../../images/Woodpecker/WP6.JPG'
import WP7 from '../../images/Woodpecker/WP7.JPG'
import WP8 from '../../images/Woodpecker/WP8.JPG'
import WP9 from '../../images/Woodpecker/WP9.JPG'
import B1 from '../../images/Bittern/B1.JPG'
import B2 from '../../images/Bittern/B2.JPG'
import B3 from '../../images/Bittern/B3.JPG'
import B4 from '../../images/Bittern/B4.JPG'
import B5 from '../../images/Bittern/B5.JPG'
import B6 from '../../images/Bittern/B6.JPG'
import B7 from '../../images/Bittern/B7.JPG'
import B8 from '../../images/Bittern/B8.JPG'
import O27 from '../../images/BarnOwl/O27.JPG'
import O31 from '../../images/BarnOwl/O31.JPG'
import O32 from '../../images/BarnOwl/O32.JPG'
import O33 from '../../images/BarnOwl/O33.JPG'

export default class Projects extends Component {
  constructor(){
    super()
    this.state = {
      projects: [
        { 
          title: 'Ivory-Billed Woodpecker',
          desc: 'Lorem Ipsum Dolor Sit Amet',
          price: '$3,000',
          images: [WP1, WP2, WP3, WP4, WP5, WP6, WP7, WP8, WP9],
          forSale: true
        },
        {
          title: 'Barn Owl',
          desc: 'Lorem Ipsum Dolor Sit Amet',
          price: '$3,500',
          images: [O27, O31, O32, O33],
          forSale: true
        },
        {
          title: 'Bittern',
          desc: 'Lorem Ipsum Dolor Sit Amet',
          price: '$3,000',
          images: [B1, B2, B3, B4, B5, B6, B7, B8],
          forSale: true

        }
      ]
    };
  }



  render() {
    let projectsDisplay = this.state.projects.map((project, i) => {
      return (
        <div className='projectWrapper' key={project + i}>
          <Project
            title = {project.title}
            desc = {project.desc}
            price = {project.price}
            images = {project.images}
            sale = {project.forSale}
          />
        </div>
      )
    })
    return (
      <div className='projects'>
        {projectsDisplay}
      </div>
    )
  }
}
