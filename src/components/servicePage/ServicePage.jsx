import React, { useEffect } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import PortfolioCard from 'components/intropage/portfolio/PortfolioCard.jsx';
import Swiper from 'components/utils/carousel/Swiper';
import { useGetServicesQuery } from 'store/reducers/serviceApi';
import { useGetProjectQuery } from 'store/reducers/portfolio';

import { Box, CircularProgress } from '@mui/material';

function ServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const { data, isFetching } = useGetServicesQuery();
  const { data: portfolio = [], isFetching: portfolioFetching } = useGetProjectQuery(id);
  if (portfolioFetching || isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100%">
        <CircularProgress />
      </Box>
    );
  }
  const service = data.find((item) => item.id.toString() === id.toString());
  if (!service) return null;
  console.log(service);

  const project = portfolio[0];

  return (
    <section className="service-page">
      <div className="heading">
        <h2 className="headline2 pointer-all">{service?.title}</h2>
        <q className="quote pointer-all">{service?.description}</q>
      </div>
      <div className="content pt-4">
        <div className="left-side"></div>
        <div className="right-side">
          {project && (
            <Swiper
              bg={project?.color}
              data={project?.small_photos.map((item) => JSON.parse(item))}
            />
          )}
        </div>
      </div>
      <div className="content service_page-content">
        <div className="left-side">
          <h4 className="child dsc1 pointer-all">{service?.goals_objectives_text}</h4>
        </div>
        <div className="right-side">
          <div className="sub_text">
            <div className="content_heading headline3">
              <h1>{service?.title_sec1}</h1>
            </div>
            <p className="paragraph py-4 pointer-all">{service?.content_sec1}</p>
            <h2 className="artcile__info headline4 pointer-all">{service?.title_sec2}</h2>
            <p className="paragraph py-4 pointer-all">{service?.content_sec2}</p>
          </div>

          <div className="content_heading pt-5 pb-4 sub_text">
            <h1 className="headline3 pointer-all">{service?.title_process}</h1>
          </div>
          <div className="develope_steps">
            {service?.processes
              .map((item) => JSON.parse(item))
              .map((item, i) => (
                <div key={item.id} className="step">
                  <div className="step-text">
                    <div className="headline4 step-title pointer-all">{item.name}</div>
                    <p className="paragraph pointer-all">{item.content}</p>
                  </div>
                  <div className="step-number">
                    <h3 className="headline3 pointer-all">{item.index_number}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="content service_page-content">
        <div className="left-side">
          <h4 className="headline4 pointer-all">{service?.title_present_project}</h4>
        </div>
        <div className="right-side">
          <p className="paragraph sub_text pointer-all">{service?.mini_text}</p>
          <div className="admin">
            <img loading="lazy" src={service?.photo_present_project} alt="admin" />
          </div>
          <div className="content_heading pt-5">
            <h3 className="headline3 pointer-all">Реализованные проекты</h3>
          </div>
          <div className="portfolio-cards pt-5">
            {portfolio?.reverse().map((item) => {
              return <PortfolioCard data={item} />;
            })}
          </div>
          <div className="quote end-text pointer-all">
            Мы создаем надежные приложения, соблюдаем сроки и бюджет, гарантируя вашей идее самый
            высокий стандарт исполнения.
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePage;
