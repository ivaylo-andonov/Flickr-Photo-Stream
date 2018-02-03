import React from 'react';

const Tag = ({name,key}) => {
    if(name) {
      return <li className="tagit-choice" key={key}>#{name}</li>
    } else {
      return false
    }
  }
  
  const TagsComponent = (props) => (
    <ul className="tagit">
    { props.tags.map((x,i) => (<Tag name={x} key={i}/>))}
    </ul>
  )

export default TagsComponent;