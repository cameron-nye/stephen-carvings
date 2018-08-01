import React, { Component } from 'react'
//Components
import Project from '../Project/Project'

export default class Projects extends Component {
  constructor(){
    super()
    this.state = {
      projects: [
        { 
          title: '',
          desc: '',
          price: '',
          images: []
        },
        {
          title: '',
          desc: '',
          price: '',
          images: []
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
