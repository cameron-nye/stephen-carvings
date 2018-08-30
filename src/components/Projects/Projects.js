import React, { Component } from 'react'
//Components
import Project from '../Project/Project'

export default class Projects extends Component {
  constructor(){
    super()
    this.state = {
      projects: [
        { 
          title: 'Ivory-Billed Woodpecker',
          desc: 'Lorem Ipsum Dolor Sit Amet',
          price: '$3,000',
          images: [],
          forSale: true
        },
        {
          title: 'Barn Owl',
          desc: 'Lorem Ipsum Dolor Sit Amet',
          price: '$3500',
          images: [],
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
