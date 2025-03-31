import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Redirect from './Redirect';
import logo from './logo.svg';
import Urls from './Urls';

function App() {
  return (
    <div className="bg-main-blue min-h-screen">
      <header className="container mx-auto py-14 flex justify-between">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-white font-bold text-2xl">
          URL shortener
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:shorten" element={<Redirect />} />
        <Route path="/urls" element={<Urls />} />
      </Routes>
    </div>
  );
}

export default App;
