import React, { useState } from 'react';
import './carousel.css';

function Carousel({ data, id, bg }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <div id={'carousel' + id} className="carousel slide">
      <div className="carousel-indicators">
        {data.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target={'#carousel' + id}
            data-bs-slide-to={index}
            className={'btn-bottom ' + (index === 0 && 'active')}
            aria-current={index === 0 && 'true'}
            aria-label={'Slide ' + (index + 1)}
          ></button>
        ))}
      </div>
      <div className={'carousel-inner'} style={{ background: bg }}>
        {data.map((item, index) => (
          <div
            data-bs-interval="6000"
            key={index}
            className={'carousel-item ' + (index === 0 && 'active')}
          >
            <div className="carousel-item-body">
              {item.map((sub, i) => (
                <div key={i} className={'carousel-phone ' + (item.length === 0 && 'single-phone')}>
                  {loading && (
                    <div className="img">
                      <span className="spinner-border text-info m-5" role="status"></span>
                    </div>
                  )}
                  <img
                    onLoad={handleImageLoad}
                    src={require('../../../images/portfolio/page/' + sub.src)}
                    alt=""
                  />
                  <p className="t">{sub.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={'#carousel' + id}
        data-bs-slide="prev"
      >
        <svg
          className="next"
          aria-hidden="true"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_288_1298)">
            <rect opacity="0.5" width="30" height="30" rx="15" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.6314 8.66214C12.818 8.45858 13.1343 8.44483 13.3379 8.63143L20.2854 15L13.3379 21.3686C13.1343 21.5552 12.818 21.5414 12.6314 21.3379C12.4448 21.1343 12.4586 20.818 12.6621 20.6314L18.8055 15L12.6621 9.36858C12.4586 9.18198 12.4448 8.8657 12.6314 8.66214Z"
              fill="#141416"
            />
          </g>
          <defs>
            <clipPath id="clip0_288_1298">
              <rect width="30" height="30" fill="currentColor" />
            </clipPath>
          </defs>
        </svg>

        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={'#carousel' + id}
        data-bs-slide="next"
      >
        <svg
          aria-hidden="true"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_288_1298)">
            <rect opacity="0.5" width="30" height="30" rx="15" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.6314 8.66214C12.818 8.45858 13.1343 8.44483 13.3379 8.63143L20.2854 15L13.3379 21.3686C13.1343 21.5552 12.818 21.5414 12.6314 21.3379C12.4448 21.1343 12.4586 20.818 12.6621 20.6314L18.8055 15L12.6621 9.36858C12.4586 9.18198 12.4448 8.8657 12.6314 8.66214Z"
              fill="#141416"
            />
          </g>
          <defs>
            <clipPath id="clip0_288_1298">
              <rect width="30" height="30" fill="currentColor" />
            </clipPath>
          </defs>
        </svg>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
