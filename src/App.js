import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './components/utils/typography/typography.css';
import IntroPage from './components/intropage/Intropage';
import Particles from 'react-particles';

function App() {
  const shouldDisplayHeader = !window.location.pathname.startsWith('/admin');

  return (
    <BrowserRouter>
      <div className="App">
        {shouldDisplayHeader && <Header />}
        <div className="container">
          <Routes>
            <Route path="/" element={<IntroPage />}></Route>
          </Routes>
        </div>
        {shouldDisplayHeader && <footer>footer</footer>}
        <Particles />
      </div>
    </BrowserRouter>
  );
}

export default App;
