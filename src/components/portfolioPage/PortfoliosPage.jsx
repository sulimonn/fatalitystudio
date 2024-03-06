import React, { useEffect } from 'react';
import './style.css';
import PortfolioCard from 'components/intropage/portfolio/PortfolioCard';
import { useGetProjectQuery } from 'store/reducers/portfolio';

function PorrtfoliosPage() {
  const { data: portfolios = [], isLoading } = useGetProjectQuery();
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
  if (isLoading) {
    return null;
  }

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
          <PortfolioCard key={portfolios[0]?.id} data={portfolios[0]} />
        </div>
        <div className="portfolio-cards">
          {portfolios?.map((item) => (
            <PortfolioCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PorrtfoliosPage;
