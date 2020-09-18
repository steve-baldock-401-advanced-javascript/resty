import React from 'react';
import './results.scss';
import ReactJson from 'react-json-view';



const Results = (props) => {

  return(
    <section className="results">
      { 
        props.loading ? (
          <div className="loading">
            <img src="https://media.giphy.com/media/IwSG1QKOwDjQk/giphy.gif" alt="loading" />
          </div>
        ) : (
        props.headers ?
        <>
          <h4>Headers</h4>
          <ReactJson src={props.headers} />
          <h4>Results</h4>
          <ReactJson src={props.results} /> 
        </> : 
        null )}
    </section>
  )
} 

export default Results;