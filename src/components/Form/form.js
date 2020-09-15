import React from 'react';
import './form.scss';

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
    let raw = await fetch(this.state.url);
    let headers = {};
    raw.headers.forEach((val, key) => headers[key] = val)
    let data = await raw.json();
    let count = data.count;
    let results = data.results;
    this.props.handler(count, results, headers);
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
          <input placeholder="URL" onChange={this.handleUrl} />
          <button onClick={this.handleClick}>Submit</button>
        </div>
        <div onChange={this.handleMethod} id="radio">
          <input type="radio" name="rest" id="Get" value="Get"></input>
          <label for="Get">Get</label>
          <input type="radio" name="rest" id="Put" value="Put"  ></input>
          <label for="Put">Put</label>
          <input type="radio" name="rest" id="Post" value="Post" ></input>
          <label for="Post">Post</label>
          <input type="radio" name="rest" id="Delete" value="Delete" ></input>
          <label for="Delete">Delete</label>
        </div>
      </form>
    );
  }
}
