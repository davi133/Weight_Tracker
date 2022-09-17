
import React from 'react';
import HomePage from './HomePage/HomePage';
import WeightCard from "./Cards/WeighCard"
import AppPage from './AppPage/AppPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  /*return (
    <div>
      <HomePage/>
    </div>
    
  );*/
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={ <HomePage/>} />
          <Route path="home" element={ <HomePage/>} />
          <Route path="app" element={<AppPage/>} />
          <Route path="test" element={<h1>This page exists only for testing</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
