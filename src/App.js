import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './components/utils/typography/typography.css';
import IntroPage from './components/intropage/Intropage';
function App() {
  const shouldDisplayHeader = !window.location.pathname.startsWith('/admin');

  return (
    <BrowserRouter>
      <div className="App">
        {shouldDisplayHeader && <Header />}
        <Routes>
          <Route path="/" element={<IntroPage />}></Route>
        </Routes>
        {shouldDisplayHeader && <footer>footer</footer>}
      </div>
    </BrowserRouter>
  );
}

export default App;
