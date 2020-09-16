import React from 'react';
import './App.css';
import './app.scss';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import Form from './components/Form/form.js';
import Results from './components/results/results.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: {},
    };
  }

  handleForm = (count, results, headers) => {
    this.setState({ count, results, headers });
  };

  render() {
    return (
      <>
        <Header />
        <Form handleClick={this.handleForm} />
        {/* <History /> */}
        <Results count={this.state.count} results={this.state.results} headers={this.state.headers} />
        <Footer />
      </>
    );
  }
}

export default App;

