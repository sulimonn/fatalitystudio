import React, { useState } from 'react';
import './intro.css';
import Laptop from '../../../images/laptop.png';
import BtnBlue from '../../utils/btn/BtnBlue';

function Intro() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <div className="intro">
      <h1 className="headline1">
        FATA<span className="yellow">LITY</span>
      </h1>
      <div className="order-project">
        <p className="quote">
          Разрабатываем сайты, мобильные приложения, системы и сервисы любой сложности
        </p>
        <div className="intro__img">
          {loading && (
            <div className="img">
              <span className="spinner-border text-info m-5" role="status"></span>
            </div>
          )}
          <img
            src={Laptop}
            alt="pic"
            onLoad={handleImageLoad}
            style={{ display: loading ? 'none' : 'block' }}
          />
        </div>
        <div className="intro__btn">
          <BtnBlue>Заказать проект</BtnBlue>
        </div>
      </div>
    </div>
  );
}

export default Intro;
