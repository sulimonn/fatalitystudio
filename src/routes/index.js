import { useRoutes } from 'react-router-dom';
import IntroPage from 'components/intropage/Intropage';
import FeedbackPage from 'components/feedbackPage/FeedbackPage';
import Blog from 'components/blogPage/Blog';
import Project from 'components/project/Project';
import PorrtfoliosPage from 'components/portfolioPage/PortfoliosPage';
import ServicePage from 'components/servicePage/ServicePage';
import Article from 'components/articlePage/Article';

export default function ThemeRoutes() {
  return useRoutes([MainRoutes]);
}

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <IntroPage />,
    },
    {
      path: 'feedback',
      element: <FeedbackPage />,
    },
    {
      path: 'blog',
      children: [
        {
          path: ':id',
          element: <Article />,
        },
        {
          path: '',
          element: <Blog />,
        },
      ],
    },
    {
      path: 'portfolio',
      children: [
        {
          path: ':id',
          element: <Project />,
        },
        {
          path: '',
          element: <PorrtfoliosPage />,
        },
      ],
    },
    {
      path: 'services/:id',
      element: <ServicePage />,
    },
  ],
};
