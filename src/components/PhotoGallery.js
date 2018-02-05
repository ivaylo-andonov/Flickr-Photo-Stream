import React, { Component } from 'react';
import PhotoView from './PhotoView';

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
    }
        
    render() {
        return (
            <div>{this.props.photos.map((item, index) =>  
                <PhotoView key={index} photo={item} onSelectTag={this.props.onSelectTag}/>)}
            </div>
        );
    }      
}

export default PhotoGallery