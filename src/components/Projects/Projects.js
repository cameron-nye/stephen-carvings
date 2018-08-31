import React, { Component } from 'react'
//Components
import Project from '../Project/Project'
//Style
import './Projects.css'
//Images
import owl from '../../images/owl.jpg'
import owl1 from '../../images/owl1.jpg'
import owl2 from '../../images/owl2.jpg'
import owl3 from '../../images/owl3.jpg'
import jays from '../../images/jays.jpg'
import robins from '../../images/robins.jpg'
import kestrel from '../../images/kestrel.jpg'
import bird from '../../images/bird.jpg'

export default class Projects extends Component {
  constructor(){
    super()
    this.state = {
      projects: [
        { 
          title: 'Ivory-Billed Woodpecker',
          desc: 'Lorem Ipsum Dolor Sit Amet',
          price: '$3,000',
          images: [jays, kestrel, robins, bird],
          forSale: true
        },
        {
          title: 'Barn Owl',
          desc: 'Lorem Ipsum Dolor Sit Amet',
          price: '$3500',
          images: [owl, owl1, owl2, owl3],
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
