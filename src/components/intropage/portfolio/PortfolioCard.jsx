import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BtnSimple from 'components/utils/btn/BtnSimple';
import useGetServiceType from 'components/utils/getServiceType';

function PortfolioCard({ data }) {
  const serviceType = useGetServiceType(data.service_id);
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
  if (!data) {
    return null;
  }
  return (
    <Link
      to={'/portfolio/' + data.id}
      className={`portfolio-card group ` + serviceType}
      style={{ background: data.color }}
    >
      <div className="portfolio-card-text">
        <h5 className="headline4 pointer-all">{data.title}</h5>
        <p className="paragraph pointer-all">{data.description}</p>
      </div>
      <div className="portfolio-card-img">
        <div className="portfolio-card-img-svg">
          <img
            loading="lazy"
            className={serviceType + ' pointer-all'}
            src={data.background_1}
            alt={data.title}
          />
        </div>
        <div className="portfolio-card-img-phone">
          {serviceType !== 'website' && (
            <img
              loading="lazy"
              src={data.background_2}
              alt=""
              className={'bg pointer-all ' + serviceType}
            />
          )}
          <img
            loading="lazy"
            className={'phone pointer-all ' + serviceType}
            src={data.cover}
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
