import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './components/utils/typography/typography.css';
import IntroPage from './components/intropage/Intropage';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FeedbackPage from './components/feedbackPage/FeedbackPage';
import Blog from './components/blogPage/Blog';
import PorrtfoliosPage from './components/portfolioPage/PortfoliosPage';
import Article from './components/articlePage/Article';
import Project from './components/project/Project';
import ServicePage from './components/servicePage/ServicePage';
import ParticlesComponent from './components/PartclesComponent';
function App() {
  const shouldDisplayHeader = !window.location.pathname.startsWith('/admin');

  return (
    <BrowserRouter>
      <div className="App">
        {shouldDisplayHeader && <Header />}
        <div className="container">
          <Routes>
            <Route path="/" element={<IntroPage />}></Route>
            <Route path="/feedback" element={<FeedbackPage />}></Route>
            <Route path="/blog/*">
              <Route index element={<Blog />} />
              <Route path=":id" element={<Article />}></Route>
            </Route>
            <Route path="/portfolio/*">
              <Route index element={<PorrtfoliosPage />} />
              <Route path=":id" element={<Project />} />
            </Route>
            <Route path="/services/:id" element={<ServicePage />} />
          </Routes>
        </div>
        {shouldDisplayHeader && <Contact />}
        {shouldDisplayHeader && <Footer />}
        <ParticlesComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
