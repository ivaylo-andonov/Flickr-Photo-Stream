import React from 'react';
import TagsComponent from './TagsComponent';
import {Well} from 'react-bootstrap';
import Parser from 'html-react-parser';

const flickrUsersUrl = 'https://www.flickr.com/people/';
const PhotoView = props => (
    <div className="responsive">
        <div className="gallery">
            <img src={props.photo.thumbnail} alt={props.photo.title}></img>                     
        </div>
        <Well className="container">
            <div className="title details">
            <strong>Title</strong>: <a href={props.photo.link} target="_blank" className="title"> {props.photo.title}</a>
            </div>
            <div className="author details"><strong>Author</strong>:
            <a href={flickrUsersUrl + props.photo.author_id} target="_bla">{props.photo.author}</a>
            </div>
            <div className="description details"><strong>Description</strong>:
            {Parser(props.photo.description, {
              replace: function(domNode) {
                let descEl = getLastNodeEL(domNode);
                if(descEl.children && descEl.children[0]){
                  return <span>{descEl.children[0].data}</span>
                }
              }})}  
          </div>
          <TagsComponent tags={props.photo.tags}/>
        </Well>
    </div>
);

function getLastNodeEL(el){
    while(el.next){
        el = el.next;
    }
    return el;
}

export default PhotoView;