import React from 'react';
import {Label} from 'react-bootstrap';

const Tag = ({name, index}) => {
    if(name && index <= 3) {
      return (<span className="tag" key={index}>
        <a href="#">#{name}</a>
      </span>)
    } else {
      return false
    }
  }
  
const TagsComponent = (props) => (
  <div className="tags details">
    {props.tags && props.tags[0] ? <Label>Tags:</Label> : ''}
    {props.tags.map((x, index) => 
  (<Tag name={x} key={index} index={index + 1}/>))}
  </div>
)

export default TagsComponent;