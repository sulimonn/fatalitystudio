import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BtnSimple from '../../utils/btn/BtnSimple';

function PortfolioCard({ data }) {
  useEffect(() => {
    const cards = document.querySelectorAll('.portfolio-card');
    const handleResize = () => {
      if (cards) {
        cards.forEach((item) => {
          if (item.clientWidth > 700) {
            item.classList.remove('group');
            item.classList.add('single');
          } else {
            item.classList.add('group');
            item.classList.remove('single');
          }
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Link
      to={'/portfolio/' + data.id}
      className={`portfolio-card group ` + data.type}
      style={{ background: data.bgColor }}
    >
      <div className="portfolio-card-text">
        <h5 className="headline4">{data.full}</h5>
        <p className="paragraph">{data.describe}</p>
      </div>
      <div className="portfolio-card-img">
        <div className="portfolio-card-img-svg">
          <img
            className={data.type}
            src={require('../../../images/portfolio/' + data.icon)}
            alt={data.name}
          />
        </div>
        <div className="portfolio-card-img-phone">
          {data.type !== 'website' && (
            <img
              src={require('../../../images/portfolio/' + data.bg)}
              alt=""
              className={'bg ' + data.type}
            />
          )}
          <img
            className={'phone ' + data.type}
            src={require('../../../images/portfolio/' + data.cover)}
            alt="pic"
          />
        </div>
      </div>
      <span className="position-absolute">
        <BtnSimple>Смотреть проект</BtnSimple>
      </span>
    </Link>
  );
}

export default PortfolioCard;
