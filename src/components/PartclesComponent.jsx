import React, { useEffect, useState } from 'react';
import 'particles.js';

function ParticlesComponent() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: document.body.scrollHeight,
  });

  useEffect(() => {
    const particlesJS = window.particlesJS;
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 1000,
          },
        },
        size: {
          value: 6,
          random: true,
        },
        opacity: {
          value: 0.2,
        },
        move: {
          speed: 3,
          out_mode: 'bounce',
        },
        line_linked: {
          opacity: 0.5,
          width: 1,
          distance: 140,
        },
      },
    });
    const handleWidthResize = () => {
      setScreenSize({ width: window.innerWidth, ...screenSize });
    };

    window.addEventListener('resize', handleWidthResize);

    return () => {
      window.removeEventListener('resize', handleWidthResize);
    };
  }, [screenSize]);

  return (
    <div id="particles-js" style={{ height: screenSize.height, width: screenSize.width }}></div>
  );
}

export default ParticlesComponent;
