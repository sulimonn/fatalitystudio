import React, { useEffect } from 'react';
import 'particles.js';

function ParticlesComponent() {
  useEffect(() => {
    const particlesJS = window.particlesJS;

    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 920,
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
  }, []);
  return <div id="particles-js"></div>;
}

export default ParticlesComponent;
