import React from 'react';
import {Alert, Popover} from 'react-bootstrap'

const LoaderIndicator = ({isLoading=false, error=false}) => (
    <div className="loader">
        {isLoading ? <Popover id="popover-basic" title="Loading..." ></Popover> : ''}
        {error? <Error/> : ''}
    </div>
  )
  
const Error = () => (
    <Alert bsStyle="danger">
        <h4>Connection error.Images can`t be retrieved</h4>
    </Alert>
)
  
export default LoaderIndicator