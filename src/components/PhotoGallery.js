import React, { Component } from 'react';
import PhotoView from './PhotoView';
import $ from 'jquery'

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
    }

    handleFlickrResponseItem({title, link, author, tags, media:{m:thumbnail}}) {

        const startIndex = author.indexOf("(");
        const endIndex = author.indexOf(")");
        author = author.substr(startIndex + 2 ,endIndex)
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
        if(items.length){
            return items.map(this.handleFlickrResponseItem)
        }
        return [];
    }
        
    render() {
        var photos = this.handleFlickrResponse(this.props.photos)
        return (
                <div>{photos.length ? photos.map((item, index) =>  
                    <PhotoView key={index} photo={item}/>) : "Loading..."}
                </div>
        );
    }      
}

export default PhotoGallery