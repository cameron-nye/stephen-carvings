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
import BF1 from '../../images/BlueFeather/BF1.jpg'
import BF2 from '../../images/BlueFeather/BF2.jpg'
import BJ1 from '../../images/BlueJay/BJ1.JPG'
import BJ2 from '../../images/BlueJay/BJ2.JPG'
import BJ3 from '../../images/BlueJay/BJ3.JPG'
import BJ4 from '../../images/BlueJay/BJ4.JPG'
import BJ5 from '../../images/BlueJay/BJ5.JPG'
import BJ6 from '../../images/BlueJay/BJ6.JPG'
import BJ7 from '../../images/BlueJay/BJ7.JPG'
import BJ8 from '../../images/BlueJay/BJ8.JPG'
import BJ9 from '../../images/BlueJay/BJ9.JPG'
import F1 from '../../images/Feather/F1.JPG'
import F2 from '../../images/Feather/F2.JPG'
import F3 from '../../images/Feather/F3.JPG'
import F4 from '../../images/Feather/F4.JPG'
import F5 from '../../images/Feather/F5.JPG'
import FC1 from '../../images/Flycatcher/FC1.JPG'
import FC2 from '../../images/Flycatcher/FC2.jpg'
import FC3 from '../../images/Flycatcher/FC3.jpg'
import FC4 from '../../images/Flycatcher/FC4.JPG'
import FC5 from '../../images/Flycatcher/FC5.jpg'
import FC6 from '../../images/Flycatcher/FC6.JPG'
import FC7 from '../../images/Flycatcher/FC7.JPG'
import FC8 from '../../images/Flycatcher/FC8.JPG'
import FC9 from '../../images/Flycatcher/FC9.JPG'
import FC10 from '../../images/Flycatcher/FC10.JPG'
import FC11 from '../../images/Flycatcher/FC11.JPG'
import FC12 from '../../images/Flycatcher/FC12.JPG'
import FC13 from '../../images/Flycatcher/FC13.JPG'
import FC14 from '../../images/Flycatcher/FC14.JPG'
import R1 from '../../images/Robin/R1.JPG'
import R2 from '../../images/Robin/R2.JPG'
import R3 from '../../images/Robin/R3.JPG'
import R4 from '../../images/Robin/R4.JPG'
import R5 from '../../images/Robin/R5.JPG'
import R6 from '../../images/Robin/R6.JPG'
import R7 from '../../images/Robin/R7.JPG'
import W1 from '../../images/Warbler/W1.JPG'
import W2 from '../../images/Warbler/W2.jpg'
import W3 from '../../images/Warbler/W3.JPG'

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
        },
        {
          title: 'Blue Feather',
          desc: 'Lorem Ipsum Dolor Sit Amet',
          price: '$1,500',
          images: [BF1, BF2],
          forSale: true
        },
        {
          title: 'Blue Jays',
          desc: 'Lorem Ipsum Dolor Sit Amet',
          price: null,
          images: [BJ1, BJ2, BJ3, BJ4, BJ5, BJ6, BJ7, BJ8, BJ9],
          forSale: false
        },
        {
          title: 'Feather',
          desc: 'Lorem Ipsum Dolor Sit Amet',
          price: '$2,000',
          images: [F1, F2, F3, F4, F5],
          forSale: true
        },
        {
          title: 'Scissor-Tailed Flycatcher',
          desc: 'Lorem Ipsum Dolor Sit Amet',
          price: '$4,500',
          images: [FC1, FC2, FC3, FC4, FC5, FC6, FC7, FC8, FC9, FC10, FC11, FC12, FC13, FC14],
          forSale: true
        },
        {
          title: 'Robins',
          desc: 'Lorem Ipsum Dolor Sit Amet',
          price: '$5,000',
          images: [R1, R2, R3, R4, R5, R6, R7],
          forSale: true
        },
        {
          title: 'Golden-Winged Warbler',
          desc: 'Lorem Ipsum Dolor Sit Amet',
          price: '$3,000',
          images: [W1, W2, W3],
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
