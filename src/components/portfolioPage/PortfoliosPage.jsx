import React, { useEffect } from 'react';
import portfolios from '../data/portfolio_list';
import './style.css';
import PortfolioCard from '../intropage/portfolio/PortfolioCard';

function PorrtfoliosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBlogElement = document.querySelectorAll('.navportfolio');
    if (navBlogElement) {
      document.querySelectorAll('.nav-link').forEach((item) => {
        item.classList.remove('active-link');
      });
      navBlogElement.forEach((item) => item.classList.add('active-link'));
    }
  }, []);

  return (
    <section className="portfolios_page pt-5">
      <h2 className="headline2">Портфолио</h2>
      <div className="portfolios_container">
        <div className="portfolio-cards">
          {portfolios.map((item) => (
            <PortfolioCard key={item.id} data={item} />
          ))}
        </div>
        <div className="portfolio-cards">
          <PortfolioCard key={portfolios[0].id} data={portfolios[0]} />
        </div>
        <div className="portfolio-cards">
          {portfolios.map((item) => (
            <PortfolioCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PorrtfoliosPage;
