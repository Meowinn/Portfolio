import './App2.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';

const App = () => {
  return(
    <div id='app'>
      <BrowserRouter basename='Portfolio'>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
