import React from 'react';
import $ from 'jquery';
import {Label} from 'react-bootstrap';
import TagView from './TagView';

const flickrApiUrl = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

class TagsComponent extends React.Component {
  constructor(props) {
    super(props)

    this.handleSelectTag = this.handleSelectTag.bind(this);
  }

  handleSelectTag(event) {
    event.preventDefault();
    $.ajax({
      url: flickrApiUrl,
      dataType: 'jsonp',
      data: { "format": "json" , "tags" : event.target.name}
    })
    .then(result => this.loadPhotos(result.items))
    .catch(e => console.log(e));
  }

  loadPhotos(flickrPhotosResponse) {
      this.props.onSelectTag(flickrPhotosResponse);     
  }

  render() {
    return (
      <div className="tags details">
        {this.props.tags && this.props.tags[0] ? <Label>Tags:</Label> : ''}
        {this.props.tags.map((x, index) => 
      (<TagView name={x} key={index} index={index + 1} handleSelectTag={this.handleSelectTag}/>))}
      </div>    
    );
  }
}

export default TagsComponent;