import React from 'react';
import './portfolio.css';
import portfolios from '../../data/portfolio_list';
import PortfolioCard from './PortfolioCard';
import BtnOutlineXl from '../../utils/btn/BtnOutlineXL';

function Portfolio() {
  return (
    <div className="portfolio content" id="portfolio">
      <div className="portfolio-title">
        <h4 className="headline3">Портфолио</h4>
      </div>
      <div className="portfolio-rigt-side">
        <div className="portfolio-cards">
          {portfolios.map((item) => (
            <PortfolioCard key={item.id} data={item} />
          ))}
        </div>
        <div className="portfolio-link">
          <a href="/portfolio">
            <BtnOutlineXl>Смотреть все проекты</BtnOutlineXl>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
