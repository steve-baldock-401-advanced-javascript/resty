import React from 'react';
import './history.scss';
// import JSONPretty from 'react-json-pretty';

function  History (props){
  const calls = props.calls || {};
  function loadRequest(apiCall){
    props.handler(apiCall);
  }

  return (
    <aside className="history">
      <h4>History</h4>
      <ul>
        {
          Object.keys(calls).map(key =>
            <li key={key}>
              <span className={`method ${props.calls[key].method}`}>{props.calls[key].method}</span>
              <button className="url" onClick={() => loadRequest(props.call[key])}>{props.calls[key].url}</button>
            </li>,
          )
        }
      </ul>
    </aside>
  );
};

export default History;