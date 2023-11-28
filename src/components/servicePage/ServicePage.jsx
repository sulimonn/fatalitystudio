import React, { useEffect } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import services from '../data/services_list.js';
import portfolios from '../data/portfolio_list.js';
import devsteps from '../data/steps.js';
import AdminIMG from '../../images/portfolio/adminpage.png';
import PortfolioCard from '../intropage/portfolio/PortfolioCard.jsx';
import Carousel from '../utils/carousel/Carousel.jsx';
import projects from '../data/project_list.js';

function ServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const service = services.find((item) => parseInt(id) === parseInt(item.id));
  const app = portfolios.find((item) => item.type === service.type);
  const project = projects.find((item) => parseInt(app.id) !== parseInt(item.id));
  const newPortf = portfolios.filter((item) => parseInt(app.id) !== parseInt(item.id)).slice(0, 3);
  return (
    <section className="service-page">
      <div className="heading">
        <h2 className="headline2">{service.title}</h2>
        <q className="quote">{service.text}</q>
      </div>
      <div className="content pt-4">
        <div className="left-side"></div>
        <div className="right-side">
          <Carousel bg={app.bgColor} id={app.id} data={project.carousel} />
        </div>
      </div>
      <div className="content service_page-content">
        <div className="left-side">
          <h4 className="child dsc1">Какие цели и задачи бизнеса решают мобильные приложения</h4>
        </div>
        <div className="right-side">
          <div className="sub_text">
            <div className="content_heading headline3">
              <h1>Приложения: Ваш надежный помощник в цифровой эпохе</h1>
            </div>
            <p className="paragraph py-4">
              Приложения стали неотъемлемой частью нашей повседневной жизни. Они предоставляют
              удобный и быстрый доступ к разнообразным сервисам и информации. От социальных сетей и
              мессенджеров до банковских приложений и онлайн-магазинов, приложения облегчают
              множество аспектов нашей жизни. Они позволяют нам общаться с друзьями, следить за
              новостями, управлять финансами, заказывать товары и услуги, играть в игры и многое
              другое. Приложения могут быть полезными для развлечения, обучения, работы и улучшения
              качества жизни.
            </p>
            <h2 className="artcile__info headline4">Для кого подходит мобильное приложение?</h2>

            <p className="paragraph py-4">
              Приложения разрабатываются с учетом разнообразных потребностей пользователей. Они
              подходят для всех, начиная от частных лиц и заканчивая крупными корпорациями. В
              зависимости от целевой аудитории и задачи, приложения могут быть адаптированы под
              конкретные потребности. Мобильные приложения, например, предоставляют мобильность и
              доступность в любое время и в любом месте. Для бизнеса приложения могут служить
              инструментами для увеличения продаж, улучшения взаимодействия с клиентами и
              оптимизации рабочих процессов. В образовательных целях приложения могут обогатить
              процесс обучения и обеспечить доступ к знаниям. Коротко говоря, приложения - это
              универсальное средство, способное удовлетворить потребности широкого круга
              пользователей.
            </p>
          </div>

          <div className="content_heading pt-5 pb-4 sub_text">
            <h1 className="headline3">Процесс разработки приложения</h1>
          </div>
          <div className="develope_steps">
            {devsteps.map((item, i) => (
              <div key={item.id} className="step">
                <div className="step-text">
                  <div className="headline4 step-title">{item.title}</div>
                  <p className="paragraph">{item.text}</p>
                </div>
                <div className="step-number">
                  <h3 className="headline3">{i + 1}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="content service_page-content">
        <div className="left-side">
          <h4 className="headline4">Админ-панель приложения “{app.name}”</h4>
        </div>
        <div className="right-side">
          <p className="paragraph sub_text">
            В дополнение к разработке мобильных и веб-приложений, мы также специализируемся на
            создании удобных и мощных административных панелей. Наши административные панели - это
            инструменты, которые помогают управлять и контролировать ваши приложения и веб-сайты,
            обеспечивая вам полный контроль над контентом, данными и настройками.
          </p>
          <div className="admin">
            <img src={AdminIMG} alt="" />
          </div>
          <div className="content_heading pt-5">
            <h3 className="headline3">Реализованные проекты</h3>
          </div>
          <div className="portfolio-cards pt-5">
            {newPortf.reverse().map((item) => {
              return <PortfolioCard data={item} />;
            })}
          </div>
          <div className="quote end-text">
            Мы создаем надежные приложения, соблюдаем сроки и бюджет, гарантируя вашей идее самый
            высокий стандарт исполнения.
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePage;
