import React from 'react';
import './form.scss';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
      stuff: '',
    };
  }

  handleUrl = e => {
    e.preventDefault();
    let url = e.target.value;
    this.setState({ url });
  };

  handleMethod = e => {
    e.preventDefault();
    let method = e.target.value;
    this.setState({ method });
  };

  handleClick = e => {
    e.preventDefault();
    // this.setState(())
    this.setState(() => {
      this.state.stuff = `Method: ${this.state.method} \n Url: ${this.state.url}`;
    })
  };

  render() {
    return (
      <form className="Form" onSubmit={this.handleClick}>
        <div id="enterstuff">
          <input placeholder="Enter URL here" onChange={this.handleUrl} />
          <button>Submit</button>
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
        <div className="Main">
          <h3>{this.state.stuff}</h3>
        </div>
      </form>
    );
  }
}
