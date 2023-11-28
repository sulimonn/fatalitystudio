import React, { useState, useEffect } from 'react';

const ParticleGenerator = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        const particle = {
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 5 + 1,
          color: '#ffffff',
          speedX: Math.random() - 0.5,
          speedY: Math.random() - 0.5,
        };
        newParticles.push(particle);
      }
      setParticles(newParticles);
    };

    const moveParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          x: particle.x + particle.speedX,
          y: particle.y + particle.speedY,
        })),
      );
    };

    const updateCanvas = () => {
      const canvas = document.getElementById('particleCanvas');
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animateParticles = () => {
      moveParticles();
      updateCanvas();
      requestAnimationFrame(animateParticles);
    };

    generateParticles();
    animateParticles();

    window.addEventListener('resize', generateParticles);

    return () => {
      window.removeEventListener('resize', generateParticles);
    };
  }, []);

  return (
    <canvas
      id="particleCanvas"
      style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
    />
  );
};

export default ParticleGenerator;
