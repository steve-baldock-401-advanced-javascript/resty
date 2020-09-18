import React, { useState } from 'react';
import './history.scss';
import Detail from '../Detail/detail.js';
// import JSONPretty from 'react-json-pretty';


const History = props => {

  const [detail, setDetail] = useState();

  const calls = props.calls || {};
  function loadRequest(apiCall){
    props.handler(apiCall);
    showDetail(apiCall);
  }

  const showDetail = (request) => {
    setDetail(<Detail request={request} />)
  }

  return (
    <>
    <aside className="history">
      <h4>History</h4>
      <ul>
        {
          Object.keys(calls).map(key =>
            <li key={key}>
              <span className={`method ${props.calls[key].method}`}>{props.calls[key].url}</span>
              <button className="url" onClick={() => loadRequest(props.calls[key])}>{props.calls[key].method}</button>
            </li>,
          )
        }
      </ul>
    </aside>
    <aside className="results">
      {detail ?
      detail : null} 
    </aside>
    </>
  );
};

export default History;