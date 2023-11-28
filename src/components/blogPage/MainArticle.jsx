import React from 'react';
import { Link } from 'react-router-dom';
import BtnOutline from '../utils/btn/Button1';

function MainArticle({ data }) {
  return (
    <>
      <div className="main-article">
        <div className="main-article__img">
          <img src={require(`../../images/blog/${data.src}`)} alt="apicture" />
        </div>
        <div className="main-article__info">
          <p className="date dsc1">{data.date}</p>
          <h2 className="headline3">{data.head.heading}</h2>
          <p className="headline4">{data.text}</p>
          <div>
            <Link to={'/blog/' + data.id}>
              <BtnOutline>Читать статью</BtnOutline>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainArticle;
