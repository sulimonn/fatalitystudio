import React, { useEffect } from 'react';
import './article.css';
import Article from './Article.jsx';
import MainArticle from './MainArticle.jsx';
import data from '../data/list_articles.js';

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBlogElement = document.querySelectorAll('.navblog');
    if (navBlogElement) {
      document.querySelectorAll('.nav-link').forEach((item) => {
        item.classList.remove('active-link');
      });
      navBlogElement.forEach((item) => item.classList.add('active-link'));
    }
  }, []);
  return (
    <section className="articles pt-4">
      <h2 className="headline2">
        <span className="yellow">Блог</span>
      </h2>
      <MainArticle data={data[0]} />
      <div className="articles__container">
        {data.map((item, index) => {
          return index !== 0 && <Article key={item.id} data={item} />;
        })}
      </div>
    </section>
  );
}

export default Blog;
