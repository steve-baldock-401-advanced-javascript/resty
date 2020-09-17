import React, { useState, useEffect } from 'react';
import './form.scss';

function Form(props) {

  const [request, setRequest] = useState({});

  // Calls set request function when component renders
  // This only gets called once it is ready
  useEffect(() => {
    const method = props.request.method || 'get';
    const url = props.request.url || '';
    const data = props.request.data ? JSON.stringify
    (props.request.data) : '';
    setRequest({ method, url, data });
  }, [props, setRequest]);

  // Updates url based on type of request
  // Spread operator clones object - Acts as an interator
  const changeURL = (e) => {
    let url = e.target.value;
    setRequest({ ...request, url });
  };

  // 
  const changeMethod = (method) => {
    setRequest({ ...request, method });
  };

  const changeBody = (e) => {
    try {
      let data = JSON.parse(e.target.value);
      setRequest({ ...request, data });
    } catch (e) {}
  };

  // Handles form submission
  const handleSubmit = async e => {
    e.preventDefault();
    props.handler(request);
  };

  // keep working on this
  // handleSubmit = async event => {
  //   event.preventDefault();
  //   let raw = await axios({
  //     url: this.state.url,
  //     method: this.state.method});
  //   let headers = raw.headers;
  //   let results = raw.data;
  //   console.log('results', raw)
  //   this.props.handler(results, headers);
  // };

  // handleUrl = e => {
  //   let url = e.target.value;
  //   this.setState({ url });
  // };

  // // Do I need this?
  // handleMethod = e => {
  //   e.preventDefault();
  //   let method = e.target.value;
  //   this.setState({ method });
  // };

  // handleClick = e => {
  //   e.preventDefault();
  //   let url = this.state.url
  //   this.setState({ url });
  // };


    return (
      <form className="Form" onSubmit={handleSubmit}>
        <div id="enterstuff">
            <input id="inputurl" type="text" name="url" placeholder="url" onChange={changeURL} />
            <button>Submit</button>
        </div>
        <div id="radio">
          <input type="radio" name="rest" id="Get" value="Get" onClick={() => changeMethod('get')} />
          <label forhtml="Get">Get</label>
          <input type="radio" name="rest" id="Put" value="Put" onClick={() => changeMethod('put')} />
          <label forhtml="Put">Put</label>
          <input type="radio" name="rest" id="Post" value="Post" onClick={() => changeMethod('post')} />
          <label forhtml="Post">Post</label>
          <input type="radio" name="rest" id="Delete" value="Delete" onClick={() => changeMethod('delete')} />
          <label forhtml="Delete">Delete</label>
          <textarea id="addStuff" name="date" placeholder="Add Body Here" rows="3" onChange={changeBody} type="text"/>
        </div>
      </form>
    );
}

export default Form;
