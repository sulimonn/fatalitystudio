import React, { useState } from 'react';
import BtnSimple from 'components/utils/btn/BtnSimple';
import formatDate from 'components/utils/date/formatDate';

function Article({ article }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <section className="article">
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
      <div className="article__info">
        <p className="date dsc1">{formatDate(article.created_at)}</p>
        <h2 className="headline4">{article.title}</h2>
        <p className="paragraph">{article.introduction}</p>
        <div className="article_link">
          <BtnSimple link={'/blog/' + article.id}>Читать статью</BtnSimple>
        </div>
      </div>
    </section>
  );
}

export default Article;
