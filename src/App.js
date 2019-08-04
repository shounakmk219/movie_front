import React from 'react';
import './App.css';

import Header from './components/Header';
import Movies from './components/Movies';
import MovieForm from './components/MovieForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Movies/>
      //<MovieForm/>
      <Footer/>
    </div>
  );
}

export default App;
