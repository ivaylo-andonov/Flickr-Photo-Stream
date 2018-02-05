import React from 'react';
import TagsComponent from './TagsComponent';
import {Well, Label, NavItem} from 'react-bootstrap';
import ParserHelper from '../helpers/ParserHelper'

const flickrUsersUrl = 'https://www.flickr.com/people/';

const PhotoView = props => (
    <div className="responsive">
        <div className="gallery">
            <img src={props.photo.thumbnail} alt={props.photo.title}></img>                     
        </div>
        <Well className="details-container">
            <div className="title details">
            <Label>Title:</Label> 
                <a href={props.photo.link} target="_blank" className="title"> {props.photo.title}</a>
            </div>
            <div className="author details">
            <Label>Author:</Label>
                <a href={flickrUsersUrl + props.photo.author_id} target="_blank">{props.photo.author}</a>
            </div>
            <div className="description details">
            <Label>Description:</Label>
            {ParserHelper.parseRawHtmlString(props.photo.description)}  
          </div>
          <TagsComponent tags={props.photo.tags}/>
        </Well>
    </div>
);

export default PhotoView;