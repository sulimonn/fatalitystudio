import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'particles.js';

function ParticlesComponent() {
  const { pathname } = useLocation();
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: document.body.scrollHeight,
  });

  useEffect(() => {
    setScreenSize((prev) => {
      return {
        ...prev,
        height: document.body.scrollHeight,
      };
    });
  }, [pathname]);

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
        interactivity: {
          evnts: {
            onclick: {
              enable: true,
              mode: 'grab',
            },
          },
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
    <div
      id="particles-js"
      className="pointer-all"
      style={{ height: screenSize.height, width: screenSize.width }}
    ></div>
  );
}

export default ParticlesComponent;
