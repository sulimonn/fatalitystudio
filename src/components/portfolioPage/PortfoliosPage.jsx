import React, { useEffect } from 'react';
import './style.css';
import PortfolioCard from 'components/intropage/portfolio/PortfolioCard';
import { useGetProjectQuery } from 'store/reducers/portfolio';

import { Box, CircularProgress } from '@mui/material';

function PorrtfoliosPage() {
  const { data: portfoliolist = [], isLoading } = useGetProjectQuery();
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
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100%">
        <CircularProgress />
      </Box>
    );
  }
  const subArrayLength = 3;
  const sortedList = [...portfoliolist].sort((a, b) => b.index_number - a.index_number);
  const portfolios = Array.from(
    { length: Math.ceil(sortedList.length / subArrayLength) },
    (_, index) => sortedList.slice(index * subArrayLength, index * subArrayLength + subArrayLength),
  );

  return (
    <section className="portfolios_page pt-5">
      <h2 className="headline2 pointer-all">Портфолио</h2>
      <div className="portfolios_container">
        {portfolios.map((projects) => (
          <>
            <div className="portfolio-cards" key={projects[0]?.id}>
              {projects.slice(0, 2).map((item) => (
                <PortfolioCard key={item.id} data={item} />
              ))}
            </div>
            <div className="portfolio-cards">
              <PortfolioCard key={projects[2]?.id} data={projects[2]} />
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default PorrtfoliosPage;
