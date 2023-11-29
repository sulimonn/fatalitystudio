import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './header.css';
import BtnOutline from '../utils/btn/Button1';
import { useEffect } from 'react';

function Header() {
  const hideCollapse = (e) => {
    const nav = document.getElementById('navbarResponsive');
    if (nav.classList.length === 2) {
      const btn = document.getElementById('collapseButton');
      if (btn) btn.click();
    }
  };
  useEffect(() => {
    const handleResize = () => {
      const nav = document.getElementById('navbarResponsive');
      if (nav && window.innerWidth > 997) {
        const btn = document.getElementById('collapseButton');
        if (btn && nav.classList.length === 2) btn.click();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="header">
        <header className="text-white navbar navbar-expand-lg" onClick={hideCollapse}>
          <div className="container">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="logo"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-2-inside-1_615_1820" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M49.3943 15.433C42.5834 14.0287 36.1201 11.3357 30.3878 7.50267C24.6578 11.3276 18.1957 14.0271 11.384 15.4327V23.2908C11.384 35.5791 18.7774 46.7832 30.3892 52.0214C42.0009 46.7832 49.3943 35.5791 49.3943 23.2908V15.433ZM30.3892 54.8606C43.5051 49.4398 52.001 37.0267 52.001 23.2908V13.2649C44.1769 11.9818 36.7766 8.92823 30.4202 4.3529L30.3892 4.33301L30.3582 4.3529C24.0017 8.91829 16.6014 11.9818 8.77734 13.2649L8.77734 23.2908C8.77734 37.0267 17.2732 49.4398 30.3892 54.8606Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M49.3943 15.433C42.5834 14.0287 36.1201 11.3357 30.3878 7.50267C24.6578 11.3276 18.1957 14.0271 11.384 15.4327V23.2908C11.384 35.5791 18.7774 46.7832 30.3892 52.0214C42.0009 46.7832 49.3943 35.5791 49.3943 23.2908V15.433ZM30.3892 54.8606C43.5051 49.4398 52.001 37.0267 52.001 23.2908V13.2649C44.1769 11.9818 36.7766 8.92823 30.4202 4.3529L30.3892 4.33301L30.3582 4.3529C24.0017 8.91829 16.6014 11.9818 8.77734 13.2649L8.77734 23.2908C8.77734 37.0267 17.2732 49.4398 30.3892 54.8606Z"
                  fill="white"
                />
                <path
                  d="M30.3878 7.50267L32.0553 5.00882L30.3892 3.89474L28.7222 5.0075L30.3878 7.50267ZM49.3943 15.433H52.3943V12.9884L50.0001 12.4947L49.3943 15.433ZM11.384 15.4327L10.7777 12.4946L8.38398 12.9886V15.4327H11.384ZM30.3892 52.0214L29.1555 54.756L30.3892 55.3125L31.6228 54.756L30.3892 52.0214ZM30.3892 54.8606L29.2433 57.6331L30.3892 58.1067L31.535 57.6331L30.3892 54.8606ZM52.001 13.2649H55.001V10.7168L52.4865 10.3044L52.001 13.2649ZM30.4202 4.3529L32.1728 1.91806L32.1077 1.8712L32.0401 1.82789L30.4202 4.3529ZM30.3892 4.33301L32.0091 1.80799L30.3892 0.768714L28.7693 1.80793L30.3892 4.33301ZM30.3582 4.3529L28.7383 1.82783L28.672 1.87033L28.6081 1.91626L30.3582 4.3529ZM8.77734 13.2649L8.29185 10.3044L5.77734 10.7168V13.2649H8.77734ZM28.7202 9.99651C34.7785 14.0475 41.6032 16.8897 48.7886 18.3712L50.0001 12.4947C43.5637 11.1677 37.4616 8.62386 32.0553 5.00882L28.7202 9.99651ZM11.9903 18.3708C19.1778 16.8876 26 14.0386 32.0533 9.99783L28.7222 5.0075C23.3156 8.61651 17.2136 11.1665 10.7777 12.4946L11.9903 18.3708ZM14.384 23.2908V15.4327H8.38398L8.38398 23.2908H14.384ZM31.6228 49.2868C21.0399 44.5127 14.384 34.3496 14.384 23.2908H8.38398C8.38398 36.8087 16.515 49.0537 29.1555 54.756L31.6228 49.2868ZM46.3943 23.2908C46.3943 34.3496 39.7384 44.5127 29.1555 49.2868L31.6228 54.756C44.2633 49.0537 52.3943 36.8087 52.3943 23.2908H46.3943ZM46.3943 15.433V23.2908H52.3943V15.433H46.3943ZM49.001 23.2908C49.001 35.7608 41.2856 47.111 29.2433 52.0881L31.535 57.6331C45.7246 51.7686 55.001 38.2927 55.001 23.2908H49.001ZM49.001 13.2649V23.2908H55.001V13.2649H49.001ZM28.6676 6.78774C35.4056 11.6378 43.2409 14.8683 51.5155 16.2253L52.4865 10.3044C45.1129 9.0952 38.1475 6.2187 32.1728 1.91806L28.6676 6.78774ZM28.7692 6.85802L28.8002 6.87792L32.0401 1.82789L32.0091 1.80799L28.7692 6.85802ZM31.978 6.87797L32.009 6.85808L28.7693 1.80793L28.7383 1.82783L31.978 6.87797ZM9.26283 16.2253C17.5397 14.868 25.3734 11.6267 32.1082 6.78954L28.6081 1.91626C22.63 6.20988 15.6631 9.09557 8.29185 10.3044L9.26283 16.2253ZM11.7773 23.2908V13.2649H5.77734L5.77734 23.2908H11.7773ZM31.535 52.0881C19.4927 47.111 11.7773 35.7608 11.7773 23.2908H5.77734C5.77734 38.2927 15.0537 51.7686 29.2433 57.6331L31.535 52.0881Z"
                  fill="white"
                  mask="url(#path-2-inside-1_615_1820)"
                />
                <path
                  d="M19.2051 18.6699H33.243L32.2346 21.7075H20.12L19.2051 18.6699Z"
                  fill="white"
                />
                <path
                  d="M20.1484 22.2471H23.3054V33.0252L20.1484 34.2125L20.1484 22.2471Z"
                  fill="white"
                />
                <path d="M22.8418 25.5469H27.5211L26.4253 28.5845H22.8418V25.5469Z" fill="white" />
                <path
                  d="M29.4944 25.5742H40.9923L39.9727 28.6118H28.3887L29.4944 25.5742Z"
                  fill="white"
                />
                <path
                  d="M29.4944 36.168H40.9923L39.9727 39.2056H28.3887L29.4944 36.168Z"
                  fill="white"
                />
                <path
                  d="M28.4023 29.1514H32.6169L40.982 35.6275H36.487L28.4023 29.1514Z"
                  fill="white"
                />
              </svg>
            </Link>
            <button
              style={{ color: '#fff' }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-expanded="false"
              aria-controls="navbarResponsive"
              id="collapseButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="nav">
                <li>
                  <Link to="/portfolio" className="nav-link navportfolio">
                    Портфолио
                  </Link>
                </li>
                <li>
                  <Link to="/feedback" className="nav-link navfeedback">
                    Отзывы
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="nav-link navblog">
                    Блог
                  </Link>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1200}
                    onClick={hideCollapse}
                    className="nav-link"
                  >
                    Контакты
                  </ScrollLink>
                </li>
              </ul>
              <div className="text-end">
                <ScrollLink
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1200}
                  onClick={hideCollapse}
                >
                  <BtnOutline>Заказать проект</BtnOutline>
                </ScrollLink>
              </div>
            </div>
          </div>
        </header>
        <div className="collapse" id="navbarResponsive">
          <div className="navbar-modal">
            <ul>
              <li>
                <Link to="/portfolio" className="nav-link navportfolio" onClick={hideCollapse}>
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="nav-link navfeedback" onClick={hideCollapse}>
                  Отзывы
                </Link>
              </li>
              <li>
                <Link to="/blog" className="nav-link navblog" onClick={hideCollapse}>
                  Блог
                </Link>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1200}
                  onClick={hideCollapse}
                  className="nav-link"
                >
                  Контакты
                </ScrollLink>
              </li>
            </ul>
            <div className="text-end">
              <ScrollLink
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={1200}
                onClick={hideCollapse}
              >
                <BtnOutline>Заказать проект</BtnOutline>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
