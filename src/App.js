import React from 'react';
import './App.css';
import './app.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import Main from './components/Main/main.js';


const App = props => {
    return (
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    );

}

export default App;

