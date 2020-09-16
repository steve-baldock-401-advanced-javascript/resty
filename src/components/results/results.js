import React from 'react';
import './results.scss';
import ReactJson from 'react-json-view';

const Results = (props) => {
  return(
  
    <div className="results">
      { props.headers?
      <>
        <ReactJson src={props.headers} />
        <ReactJson src={props.results} /> 
      </> : 
      null }
    </div>
  )
} 

export default Results