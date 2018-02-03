import React from 'react';

const Tag = ({name, index}) => {
    if(name) {
      return (<span className="tagit-choice" key={index}>
        <a href="#">#{name}</a>
      </span>)
    } else {
      return false
    }
  }
  
  const TagsComponent = (props) => (
    <div className="tagit">
    Tags: { props.tags.map((x, index) => (<Tag name={x} key={index}/>))}
    </div>
  )

export default TagsComponent;