import React, { useEffect } from 'react';
import FeedbackItem from './feedbacks/Feedback';
import { useGetReviewsQuery } from 'store/reducers/reviewsApi';

function FeedbackPage() {
  const { data: feedbacks = [] } = useGetReviewsQuery();
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBlogElement = document.querySelectorAll('.navfeedback');
    if (navBlogElement) {
      document.querySelectorAll('.nav-link').forEach((item) => {
        item.classList.remove('active-link');
      });
      navBlogElement.forEach((item) => item.classList.add('active-link'));
    }
  }, []);
  return (
    <section>
      <div className="feedback_head pt-5">
        <h2 className="headline2 pointer-all">Отзывы клиентов</h2>
        <p className="quote pointer-all">
          За годы работы мы установили прочные отношения с нашими клиентами, которые высоко ценят
          нас за вдумчивый подход, внимание к деталям и стремление к идеальному результату.
        </p>
      </div>
      {feedbacks.map((feedback) => {
        return <FeedbackItem key={feedback.id} feedback={feedback} />;
      })}
    </section>
  );
}

export default FeedbackPage;
