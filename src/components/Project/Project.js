import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
//Style
import './Project.css'
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';



export default class Project extends Component {



  render() {
    let {images} = this.props
    const gallery = [
      {
        original: images[0],
        thumbnail: images[0]
      },
      {
        original: images[1],
        thumbnail: images[1]
      },
      {
        original: images[2],
        thumbnail: images[2]
      },
      {
        original: images[3],
        thumbnail: images[3]
      },
      {
        original: images[4],
        thumbnail: images[4]
      },
      {
        original: images[5],
        thumbnail: images[5]
      },
      {
        original: images[6],
        thumbnail: images[6]
      },
      {
        original: images[7],
        thumbnail: images[7]
      },
      {
        original: images[8],
        thumbnail: images[8]
      }
    ]
    return (
      <div className='project'>
        <div className="projTitle">{this.props.title}</div>
        <div className="projDesc">{this.props.desc}</div>
        <div className="gallery"> <ImageGallery items={gallery} showThumbnails={true} showIndex={true}/> </div>
        <div className="price">{this.props.price}</div>
      </div>
    )
  }
}
