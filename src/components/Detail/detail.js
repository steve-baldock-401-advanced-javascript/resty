import React from 'react';

const Detail = (props) => {

  const { method, url, data } = props.request;
  return (
    <div>
      <h6>Method: { method }</h6>
      <h6>URL: { url }</h6>
      <h6>Body: { data } </h6>
    </div>
  )
}

export default Detail