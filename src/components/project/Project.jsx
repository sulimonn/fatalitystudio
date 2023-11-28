import React, { useEffect } from 'react';
import './project.css';
import { useParams } from 'react-router-dom';
import portfolios from '../data/portfolio_list.js';
import projects from '../data/project_list.js';
import Carousel from '../utils/carousel/Carousel';
import services from '../data/services_list.js';
import BtnOutlineXl from '../utils/btn/BtnOutlineXL.jsx';

function Project() {
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
  const { id } = useParams();
  const portfolio = portfolios.find((item) => parseInt(item.id) === parseInt(id));
  const project = projects.find((item) => parseInt(item.id) === parseInt(id));
  const service = services.find((item) => item.type === portfolio.type);
  return (
    <section className="project-page">
      <div className={'project-head-img'} style={{ backgroundColor: portfolio.bgColor }}>
        <img className="icon" src={require('../../images/portfolio/' + portfolio.icon)} alt="" />
        <img
          className="bg"
          src={require('../../images/portfolio/' +
            (portfolio.bg === null ? portfolio.icon : portfolio.bg))}
          alt=""
        />
        <div className="phones">
          {project.cover.map((item, index) => (
            <img key={index} src={require('../../images/portfolio/page/' + item)} alt="" />
          ))}
        </div>
      </div>

      <div className="project-content">
        <h1 className={'headline2 ' + portfolio.type}>
          <span className="white">{portfolio.name}</span>
        </h1>
        <div className="content">
          <div className="left-side">
            <h2 className="headline3">О проекте</h2>
          </div>
          <div className="sub_text right-side">
            <p className="quote">{project.aboutProject}</p>
            {project.subtext.split('\n').map((paragraph, index) => (
              <p className="paragraph" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="content project-carousel">
          <div className="left-side">
            <h6 className="pt-0 dsc1">Дополнительные экраны</h6>
          </div>
          <div className="right-side">
            <Carousel bg={portfolio.bgColor} id={project.id} data={project.carousel} />
          </div>
        </div>
        <div className="project-solution content">
          <div className="left-side">
            <h2 className="headline3">Решение</h2>
          </div>
          <div className="sub_text right-side">
            {project.solution.split('\n').map((paragraph, index) => (
              <p className="paragraph" key={index}>
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
            <span className="yellow">разработка приложений</span>
          </h3>
          <p className="paragraph py-2">
            Специализируемся на создании пользовательских мобильных приложений, обеспечивая
            надежность и высокую производительность для удовлетворения ваших потребностей.
          </p>
          <div className="btn">
            <BtnOutlineXl link={'/services/' + service.id}>Подробнее об услуге</BtnOutlineXl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
