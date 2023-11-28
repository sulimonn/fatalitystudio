import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnOutline from '../utils/btn/Button1';

function MainArticle({ data }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <div className="main-article">
      <div className="main-article__img">
        {loading && (
          <div className="img">
            <span className="spinner-border m-5" role="status"></span>
          </div>
        )}
        <img
          className="img"
          onLoad={handleImageLoad}
          src={require(`../../images/blog/${data.src}`)}
          alt="apicture"
          style={{ display: loading ? 'none' : 'block' }}
        />
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
  );
}

export default MainArticle;
