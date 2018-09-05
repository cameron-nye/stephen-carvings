import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
//Style
import './Project.css'
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';



export default class Project extends Component {



  render() {
    const gallery = this.props.images.map(pic => {
      return {
        original: pic,
        thumbnail: pic 
      }
    })
    return (
      <div className='project'>
        <div className="projTitle">{this.props.title}</div>
        <div className="gallery"> <ImageGallery items={gallery} showThumbnails={true} showIndex={true} showBullets={true}/> </div>
        <div className="projDesc">{this.props.desc}</div>
        <div className="price">{this.props.price}</div>
      </div>
    )
  }
}
