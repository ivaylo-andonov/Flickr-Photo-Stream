import React from 'react';

const TagView = ({name, index, handleSelectTag}) => {
    if(name && index < 7) {
        return (<span className="tag" key={index}>
        <a href="javascript:void" name={name} onClick={handleSelectTag}>#{name}</a>
        </span>)
    } else {
        return false
    }
}

export default TagView