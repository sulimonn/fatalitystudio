import React, { useEffect } from 'react';
import './blog.css';
import { useParams } from 'react-router-dom';
//import TeamCard from 'components/intropage/ourteam/TeamCard.jsx';
import { useGetPostByIdQuery } from 'store/reducers/blogApi';

import { CircularProgress, Box } from '@mui/material';
import TeamCard from 'components/intropage/ourteam/TeamCard';

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
  const { data: article = {}, isFetching } = useGetPostByIdQuery(id);

  if (isFetching)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100%">
        <CircularProgress />
      </Box>
    );

  return (
    <section className="blog_article">
      <div className="blog_article_img">
        <img src={article.cover} alt="cover" />
      </div>
      <div className="content_heading">
        <h4 className="dsc1">{article.introduction}</h4>
        <h3 className="headline3">{article.title}</h3>
      </div>
      <div className="blog_content">
        <div className="content_text">
          <div className="content_text_head">
            {article.content.split('\n').map((paragraph, index) => (
              <p className="paragraph" key={index}>
                {paragraph}
              </p>
            ))}
            <div className="img">
              <img src={article.photo} alt="content" />
            </div>
          </div>
          <div className="sub_text">
            <h4 className="headline4">{article.title_sec1}</h4>
            {article.content_sec1.split('\n').map((paragraph, index) => (
              <p className="paragraph" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <h2 className="quote">{article?.middle_sec_text} </h2>
          <div className="sub_text">
            <h4 className="headline4">{article.title_sec2}</h4>
            {article.content_sec2.split('\n').map((paragraph, index) => (
              <p className="paragraph" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <TeamCard id={article.author} />
        </div>
      </div>
    </section>
  );
}

export default Article;
