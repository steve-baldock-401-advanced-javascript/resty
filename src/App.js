import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import './App.css';
import './app.scss';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import Form from './components/Form/form.js';
import Results from './components/results/results.js';
import History from './components/history/history.js';

function App(props) {
  const [loading, toggleLoading] = useState(false);
  const [results, fetchResults] = useState(null);
  const [history, updateHistory] = useState(null);


  // This is saying, if this function is called (in fetch) and there is no loading state, then run the function
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  // This is saying, take search results, convert (stringify) and place in local storage
  // MD5 is a hashing algorithm that is no longer widely used - too many exposed hash tables
  updateHistory(request) {
    let hash = md5(JSON.stringify(request));

    const history = { ...this.state.history, [hash]: request }

    this.setState({ history }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.history));
    });
  }

  // This is setting state for result to be returned from API call
  updateResults = (headers, results) => {
    this.setState({ headers, results });
  };

  // This is a function that initiates changing the form to reflect what method requested
  updatedRequest = (request) => {
    this.setState({ request });
  }

  //this handles the submit, triggering the appropriate functions listed below asynchronously or sends back an error
  fetchResults = async (request) => {
    try {
      this.toggleLoading();
      this.updateRequest(request);
      let response = await axios(request);
      this.toggleLoading();
      this.updateHistory(request);
      this.updateResults(response.headers, response.data);
    }
    catch (e) {
      console.log(e);
    }
  }

  // Waits for component to mount to DOM or render

  useEffect(() => {
    let history = JSON.parse(localStorage.getItem('history'));
      this.setState({ history });
  },

  // Run fetchResults handler to trigger all functions above
  render() {
    return (
      <>
        <Header />
        <Form request={this.state.request} handler={this.fetchResults} />
        <main>
          <History handler={this.updateRequest} calls={this.state.history} />
          <Results loading={this.state.loading} results={this.state.results} headers={this.state.headers} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;

