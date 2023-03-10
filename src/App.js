import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';

const App = () => {
  return(
    <div id='app'>
      <BrowserRouter basename='Portfolio_v1.2'>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
