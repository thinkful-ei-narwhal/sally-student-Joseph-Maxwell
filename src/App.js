import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header name='Sally'/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
