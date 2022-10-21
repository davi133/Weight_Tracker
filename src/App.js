
import React from 'react';
import HomePage from './HomePage/HomePage';
import AppPage from './AppPage/AppPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={ <HomePage/>} />
          <Route path="home" element={ <HomePage/>} />
          <Route path="app" element={<AppPage/>} />
          <Route path="test" element={<h1>This page exists only for testing</h1>} />
          <Route path="*" element={<h1>não tem nada aqui</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
