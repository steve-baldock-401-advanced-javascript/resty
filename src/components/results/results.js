import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';

const Results = (props) => {
  return(
    <div className="results">
      <h3>Count: {props.count} </h3>
      <p>Headers: {JSON.stringify(props.headers)}</p>
      <JSONPretty data={props.results}></JSONPretty>
    </div>
  )
} 


export default Results