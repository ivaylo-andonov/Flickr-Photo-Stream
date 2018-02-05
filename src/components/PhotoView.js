import React from 'react';
import TagsComponent from './TagsComponent';
import {Well, Label, NavItem} from 'react-bootstrap';
import ParserHelper from '../helpers/ParserHelper'

const flickrUsersUrl = 'https://www.flickr.com/people/';

const PhotoView = props => {
    let {photo} = props;
    
    return (<div className="responsive">
        <div className="gallery">
            <img src={photo.thumbnail} alt={photo.title}></img>                     
        </div>
        <Well className="details-container">
            <div className="title details">
            <Label>Title:</Label> 
                <a href={photo.link} target="_blank" className="title"> {photo.title}</a>
            </div>
            <div className="author details">
            <Label>Author:</Label>
                <a href={flickrUsersUrl + photo.author_id} target="_blank">{photo.author}</a>
            </div>
            <div className="description details">
            <Label>Description:</Label>
            {ParserHelper.parseRawHtmlString(photo.description)}  
          </div>
          <TagsComponent tags={photo.tags} onSelectTag={props.onSelectTag}/>
        </Well>
    </div>)
};

export default PhotoView;