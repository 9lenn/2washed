import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Blog from './components/Blog';
import About from './components/About';
import Photos from './components/Photos';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/photos" component={Photos} />
        </Routes>
        <h1>Hep</h1>
      </div>
    </Router>
  );
}

export default App;