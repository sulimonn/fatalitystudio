import React, { useState } from 'react';
import BtnSimple from '../utils/btn/BtnSimple';

function Article({ data }) {
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
          src={require(`../../images/blog/${data.src}`)}
          alt="apicture"
          style={{ display: loading ? 'none' : 'block' }}
        />
      </div>
      <div className="article__info">
        <p className="date dsc1">{data.date}</p>
        <h2 className="headline4">{data.head.heading}</h2>
        <p className="paragraph">{data.text}</p>
        <div className="article_link">
          <BtnSimple link={'/blog/' + data.id}>Читать статью</BtnSimple>
        </div>
      </div>
    </section>
  );
}

export default Article;
