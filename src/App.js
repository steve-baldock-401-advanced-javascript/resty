import React from 'react';
import './App.css';
import './app.scss';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import Form from './components/Form/form.js';
import Results from './components/results/results.js';
import History from './components/history/history.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      headers: null,
    };
  }

  handleForm = (results, headers) => {
    this.setState({ results, headers });
  };

  render() {
    return (
      <>
        <Header />
        <Form handler={this.handleForm} />
        <History />
        <Results results={this.state.results} headers={this.state.headers} />
        <Footer />
      </>
    );
  }
}

export default App;

