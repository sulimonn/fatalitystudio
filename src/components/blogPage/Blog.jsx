import React, { useEffect } from 'react';
import './article.css';
import Article from './Article.jsx';
import MainArticle from './MainArticle.jsx';
import { useGetPostsQuery } from 'store/reducers/blogApi';
import { CircularProgress, Box } from '@mui/material';

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

  const { data: articles = [], isFetching } = useGetPostsQuery();
  if (isFetching)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100%">
        <CircularProgress />
      </Box>
    );
  return (
    <section className="articles pt-4">
      <h2 className="headline2">
        <span className="yellow pointer-all">Блог</span>
      </h2>
      {articles.length !== 0 && <MainArticle article={articles[0]} />}
      <div className="articles__container">
        {articles.map((item, index) => {
          return index !== 0 && <Article key={item.id} article={item} />;
        })}
      </div>
    </section>
  );
}

export default Blog;
