import React, { useEffect, useState } from 'react';
import './project.css';
import { useParams } from 'react-router-dom';
import BtnOutlineXl from 'components/utils/btn/BtnOutlineXL.jsx';
import Swiper from 'components/utils/carousel/Swiper';
import { useGetProjectByIdQuery } from 'store/reducers/portfolio';
import { useGetServicesQuery } from 'store/reducers/serviceApi';
import useGetServiceType from 'components/utils/getServiceType';

import { CircularProgress, Box } from '@mui/material';

function Project() {
  const [service, setService] = useState();

  const { id } = useParams();
  const { data: project, isFetching } = useGetProjectByIdQuery(id);

  const serviceType = useGetServiceType(project?.service_id);
  const { data: services = [], isFetching: isFetchingServices } = useGetServicesQuery();

  const handleImageLoad = () => {};

  useEffect(() => {
    if (project?.service_id && services) {
      setService(services.find((item) => item.id === project?.service_id));
    }
  }, [project, services]);
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
  if (isFetching || isFetchingServices)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100%">
        <CircularProgress />
      </Box>
    );

  return (
    <section className="project-page">
      <div className="project-head-img" style={{ backgroundColor: project.color }}>
        <img className="icon" src={project.background_1} alt="background_1" />
        <img
          className="bg"
          src={project.background_2 === null ? project.background_1 : project.background_2}
          alt="background_2"
        />
        <div className="phones">
          {project.big_photos
            .map((item) => JSON.parse(item))
            .map((item, index) => (
              <>
                <Box width={'100%'} height={{ xs: '80%', sm: '90%', md: '100%' }} key={item.id}>
                  <img
                    loading="lazy"
                    onLoad={handleImageLoad}
                    key={index}
                    src={`http://79.174.82.88/${item.upload}`}
                    alt="big photos"
                    style={{
                      display: 'block',
                      width: 'auto',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </>
            ))}
        </div>
      </div>

      <div className="project-content">
        <h1 className={'headline2 ' + serviceType}>
          <span className="white">{project.title}</span>
        </h1>
        <div className="content">
          <div className="left-side">
            <h2 className="headline3 pointer-all">О проекте</h2>
          </div>
          <div className="sub_text right-side">
            <p className="quote">{project?.about}</p>
            {project?.about_content.split('\n').map((paragraph, index) => (
              <p className="paragraph pointer-all" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="content project-carousel">
          <div className="left-side">
            <h6 className="pt-0 dsc1 pointer-all">Дополнительные экраны</h6>
          </div>
          <div className="right-side">
            <Swiper
              bg={project.color}
              data={project.small_photos.map((item) => JSON.parse(item))}
            />
          </div>
        </div>
        <div className="project-solution content">
          <div className="left-side">
            <h2 className="headline3 pointer-all">Решение</h2>
          </div>
          <div className="sub_text right-side">
            {project?.solution.split('\n').map((paragraph, index) => (
              <p className="paragraph pointer-all" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="content aboute-service">
        <div className="left-side"></div>
        <div className="right-side">
          <h3 className="pt-0 headline3">
            <span className="yellow pointer-all">{service?.title}</span>
          </h3>
          <p className="paragraph py-2 pointer-all">{service?.description}</p>
          <div className="btn">
            <BtnOutlineXl link={'/services/' + service?.id}>Подробнее об услуге</BtnOutlineXl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
