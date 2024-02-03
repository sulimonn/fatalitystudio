import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const defaultTheme = createTheme({
    palette: {
      mode: 'dark',
      background: '#242424',
      primary: {
        main: '#A9A9A9',
        light: '#FFFFFF',
        dark: '#242424',
        contrastText: '#141416',
      },
      warning: {
        main: '#FFD951',
      },
      info: {
        main: '#08FFFC10',
        light: '#08FFFC',
      },
      secondary: {
        main: '#ff4081',
      },
    },
    typography: {
      fontFamily: 'var(--ff-exo-2)',
    },
  });
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <ThemeProvider theme={defaultTheme}>
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
          <Contact />
          <Footer />
          <ParticlesComponent />
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
