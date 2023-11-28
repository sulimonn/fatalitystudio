import React, { useCallback } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './components/utils/typography/typography.css';
import IntroPage from './components/intropage/Intropage';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FeedbackPage from './components/feedbackPage/FeedbackPage';
import Blog from './components/blogPage/Blog';
import PorrtfoliosPage from './components/portfolioPage/PortfoliosPage';
import Article from './components/articlePage/Article';
import Project from './components/project/Project';
import ServicePage from './components/servicePage/ServicePage';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  const shouldDisplayHeader = !window.location.pathname.startsWith('/admin');

  return (
    <BrowserRouter>
      <div className="App">
        {shouldDisplayHeader && <Header />}
        <div className="container">
          <Routes>
            <Route path="/" element={<IntroPage />}></Route>
            <Route path="/feedback" element={<FeedbackPage />}></Route>
            <Route path="/blog">
              <Route index element={<Blog />} />
              <Route path=":id" element={<Article />}></Route>
            </Route>
            <Route path="/portfolio">
              <Route index element={<PorrtfoliosPage />} />
              <Route path=":id" element={<Project />} />
            </Route>
            <Route path="/services/:id" element={<ServicePage />} />
          </Routes>
        </div>
        {shouldDisplayHeader && <Contact />}
        {shouldDisplayHeader && <Footer />}
        <Particles
          id="particles"
          init={particlesInit}
          options={{
            fullScreen: false,
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 20,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: 'push',
                },
                onHover: {
                  enable: false,
                  mode: 'repulse',
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
                opacity: 0.1,
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 70,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
