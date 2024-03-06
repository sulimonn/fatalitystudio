import React from 'react';
import './portfolio.css';
import PortfolioCard from './PortfolioCard';
import BtnOutlineXl from 'components/utils/btn/BtnOutlineXL';
import { useGetProjectQuery } from 'store/reducers/portfolio';

function Portfolio() {
  const { data: portfolios = [], isLoading } = useGetProjectQuery();
  if (isLoading) {
    return null;
  }
  return (
    <div className="portfolio content" id="portfolio">
      <div className="portfolio-title">
        <h3 className="headline3">Портфолио</h3>
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
