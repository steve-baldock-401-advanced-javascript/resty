import React from 'react';
import './form.scss';
import axios from "axios";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
    };
  }

  // keep working on this
  handleSubmit = async event => {
    event.preventDefault();
    let raw = await axios({
      url: this.state.url,
      method: this.state.method});
    let headers = raw.headers;
    let results = raw.data;
    console.log('results', raw)
    this.props.handler(results, headers);
  };

  handleUrl = e => {
    let url = e.target.value;
    this.setState({ url });
  };

  // Do I need this?
  handleMethod = e => {
    e.preventDefault();
    let method = e.target.value;
    this.setState({ method });
  };

  handleClick = e => {
    e.preventDefault();
    let url = this.state.url
    this.setState({ url });
  };

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <div id="enterstuff">
            <input id="inputurl" type="text" placeholder="url" onChange={this.handleUrl} />
            <button>Submit</button>
        </div>
        <div onChange={this.handleMethod} id="radio">
          <input type="radio" name="rest" id="Get" value="Get"></input>
          <label forhtml="Get">Get</label>
          <input type="radio" name="rest" id="Put" value="Put"  ></input>
          <label forhtml="Put">Put</label>
          <input type="radio" name="rest" id="Post" value="Post" ></input>
          <label forhtml="Post">Post</label>
          <input type="radio" name="rest" id="Delete" value="Delete" ></input>
          <label forhtml="Delete">Delete</label>
          <textarea id="addStuff" placeholder="Add Body Here" rows="1" type="text"></textarea>
        </div>
      </form>
    );
  }
}
