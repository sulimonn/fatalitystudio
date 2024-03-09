import React, { useState, useEffect } from 'react';

// style
import 'components/utils/typography/typography.css';

// components
import ScrollTop from 'components/utils/ScrollTop';
import Contact from 'components/contact/Contact';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import ParticlesComponent from 'components/PartclesComponent';
import Routes from './routes';
import Popup from 'components/utils/Popup';

function App() {
  const [particlesKey, setParticlesKey] = useState(0);

  useEffect(() => {
    setParticlesKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <ScrollTop>
      <div className="App pointer-none">
        <ParticlesComponent key={particlesKey} />
        <Header />
        <div className="container">
          <Routes />
        </div>
        <Contact />
        <Footer />
      </div>
      <Popup />
    </ScrollTop>
  );
}

export default App;
