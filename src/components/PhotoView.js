import React from 'react';
import TagsComponent from './TagsComponent';

const PhotoView = props => (
    <div className="responsive">
        <div className="gallery">
            <img src={props.photo.thumbnail} alt={props.photo.title}></img>                     
        </div>
        <div className="container">
            Title: <a href={props.photo.link} target="_blank" className="title"> {props.photo.title}</a>
            <div className="author">Author: {props.photo.author}</div>
            <TagsComponent tags={props.photo.tags}/>
            {/* <div dangerouslySetInnerHTML={{ __html:props.photo.description }} />
             */}
        </div>
    </div>
);

export default PhotoView;