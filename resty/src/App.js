import React from 'react';
import logo from './logo.svg';
import './App.css';
import './app.scss';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import Form from './components/Form/form.js';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

