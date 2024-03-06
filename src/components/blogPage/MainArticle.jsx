import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnOutline from 'components/utils/btn/Button1';
import formatDate from 'components/utils/date/formatDate';

function MainArticle({ article }) {
  console.log(article);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <div className="main-article">
      <div className="main-article__img">
        {loading && (
          <div className="img">
            <span className="spinner-border text-warning m-5" role="status"></span>
          </div>
        )}
        <img
          className="img"
          onLoad={handleImageLoad}
          src={article?.cover}
          alt="cover"
          style={{ display: loading ? 'none' : 'block' }}
        />
      </div>
      <div className="main-article__info">
        <p className="date dsc1">{formatDate(article.created_at)}</p>
        <h2 className="headline3">{article.title}</h2>
        <p className="headline4">{article.introduction}</p>
        <div>
          <Link to={'/blog/' + article.id}>
            <BtnOutline>Читать статью</BtnOutline>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainArticle;
