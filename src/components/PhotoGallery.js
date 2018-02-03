import React, { Component } from 'react';
import PhotoView from './PhotoView';
import $ from 'jquery'

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        this.photoItems = this.handleFlickrResponse(props.photos);
    }
    handleFlickrResponseItem({
        title,
        link,
        author,
        tags,
        media:{
          m:thumbnail
        }
      }) {
         const startIndex = author.indexOf("(") + 1
          const endIndex = author.indexOf(")");
          author = author.substr(startIndex,endIndex)
          tags = tags.split(" ")
          return {
            title,
            link,
            thumbnail,
            tags,
            author
          }  
      }
      
     handleFlickrResponse(items) {
        return items.map(this.handleFlickrResponseItem)
      }
        
    render() {
        return (
                <div>{this.photoItems.map((item, index) =>  
                <PhotoView key={index} photo={item}/>)}
                </div>
        );
    }      
}

export default PhotoGallery