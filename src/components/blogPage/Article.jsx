import React from 'react';
import BtnSimple from '../utils/btn/BtnSimple';

function Article({ data }) {
  return (
    <div className="article">
      <div className="main-article__img">
        <img src={require(`../../images/blog/${data.src}`)} alt="apicture" />
      </div>
      <div className="article__info">
        <p className="date dsc1">{data.date}</p>
        <h2 className="headline4">{data.head.heading}</h2>
        <p className="paragraph">{data.text}</p>
        <div className="article_link">
          <BtnSimple link={'/blog/' + data.id}>Читать статью</BtnSimple>
        </div>
      </div>
    </div>
  );
}

export default Article;
