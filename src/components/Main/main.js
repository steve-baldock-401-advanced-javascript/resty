import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5';
import Form from '../Form/form.js';
// import List from '../list/list';
import History from '../history/history.js';
import Help from '../help/help.js';
// import Home from '../Home/home.js';
import Results from '../results/results.js';


// Building main as my main center for routes
const Main = props => {

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({});
  const [history, setHistory] = useState({});
  const [request, setRequest] = useState({});


  // This is saying, if this function is called (in fetch) and there is no loading state, then run the function
  const toggleLoading = () => {
   setLoading(loading => !loading);
  }

  // // This is saying, take search results, convert (stringify) and place in local storage
  // // MD5 is a hashing algorithm that is no longer widely used - too many exposed hash tables
  const updateHistory = (request) => {
    let hash = md5(JSON.stringify(request));

    const newhistory = { ...history, [hash]: request }

      setHistory (newhistory)
      localStorage.setItem('history', JSON.stringify(newhistory));
  }

  // // This is setting state for result to be returned from API call
  const updateResults = (headers, results) => {
    setResults({ headers, results });
  };

  // // This is a function that initiates changing the form to reflect what method requested
  const updateRequest = (request) => {
    console.log(request)
    setRequest(request);
  };

  // //this handles the submit, triggering the appropriate functions listed below asynchronously or sends back an error
  const fetchResults = async (request) => {
    try {
      toggleLoading();
      updateRequest(request);
      let response = await axios(request);
      toggleLoading();
      updateHistory(request);
      updateResults(response.headers, response.data);
    }
    catch (e) {
      console.log(e);
    }
  }

  // // Waits for component to mount to DOM or render
  // Pulling from local storage
  // Dependency array is vital
  useEffect(() => {
    let history = JSON.parse(localStorage.getItem('history'));
     setHistory(history);
  }, [setHistory]);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
        <Form request={request} handler={fetchResults} />
        <Results loading={loading} headers={results.headers} results={results.results} />
        </Route>
        <Route exact path="/history">
          <History handler={updateRequest} calls={history} />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
      </Switch>
    </main >
  );
};

export default Main;

      