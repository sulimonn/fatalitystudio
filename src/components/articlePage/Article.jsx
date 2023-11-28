import React, { useEffect } from 'react';
import './blog.css';
import { useParams } from 'react-router-dom';
import data from '../data/list_articles.js';
import team from '../data/team_data.js';
import TeamCard from '../intropage/ourteam/TeamCard.jsx';

function Article() {
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
  const { id } = useParams();
  console.log(id);

  const article = data.find((item) => parseInt(item.id) === parseInt(id));
  const author = team.find((item) => parseInt(article.authorId) === parseInt(item.id));
  return (
    <section className="blog_article">
      <div className="blog_article_img">
        <img src={require('../../images/blog/' + article.src)} alt="" />
      </div>
      <div className="content_heading">
        <h4 className="dsc1">{article.text}</h4>
        <h3 className="headline3">{article.head.heading}</h3>
      </div>
      <div className="blog_content">
        <div className="content_text">
          <div className="content_text_head">
            {article.head.text.split('\n').map((paragraph, index) => (
              <p className="paragraph" key={index}>
                {paragraph}
              </p>
            ))}
            <div className="img">
              <img src={require('../../images/' + article.head.src)} alt="" />
            </div>
          </div>
          <div className="sub_text">
            <h4 className="headline4">{article.sub1.head}</h4>
            {article.sub1.text.split('\n').map((paragraph, index) => (
              <p className="paragraph" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <h2 className="quote">{article.big} </h2>
          <div className="sub_text">
            <h4 className="headline4">{article.sub2.head}</h4>
            {article.sub2.text.split('\n').map((paragraph, index) => (
              <p className="paragraph" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <TeamCard data={author} />
        </div>
      </div>
    </section>
  );
}

export default Article;
