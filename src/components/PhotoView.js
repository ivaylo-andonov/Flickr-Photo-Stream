import React from 'react';

const PhotoView = props => (
    <div key={props.photo.author_id} className="responsive">
        <div className="gallery">
            <img src={props.photo.media.m} alt="Trolltunga Norway" width="600" height="400"></img>                     
        </div>
        <div className="container">
            <a href={props.photo.link} target="_blank" className="title">Title: {props.photo.title}</a>
            <div className="author">Author: {props.photo.author}</div>
            {/* <div dangerouslySetInnerHTML={{ __html:props.photo.description }} />
            <div className="author">Tags: {props.photo.tags}</div> */}
        </div>
    </div>
);

export default PhotoView;