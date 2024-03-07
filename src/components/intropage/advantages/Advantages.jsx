import React, { useState } from 'react';
import './adv.css';
import Photo from 'images/Rectangle 42334.png';
import advantages from 'components/data/advantages_list';

function Advantages() {
  const [rotation, setRotation] = useState(false);

  const handleButtonClick = (e) => {
    if (e.target.attributes['aria-expanded']['value'] === 'true') {
      e.target.classList.add('rotate');
    } else {
      e.target.classList.remove('rotate');
    }
    setRotation(!rotation);
  };

  return (
    <div className="content">
      <h3 className="headline3 pointer-all">преимущества</h3>
      <div className="advatges-right-side">
        <div className="row d-flex">
          <div className="advatges-about col-lg-6 col-md-12 offset-md-0 offset-lg-6">
            <p className="paragraph pointer-all">
              Наши достижения говорят сами за себя: мы успешно завершили более 100 проектов и
              уверенно присутствуем на рынке веб-разработки уже 5 лет, предоставляя клиентам
              надежность, опыт и профессионализм.
            </p>
          </div>
        </div>
        <div className="advatges-collapse">
          {advantages.map((item) => {
            return (
              <div key={item.id} className="advantages-collapse-item">
                <div className="collapse-item-title">
                  <h4 className="headline4 pointer-all">{item.title}</h4>
                  <button
                    className="pointer-all"
                    onClick={handleButtonClick}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={'#collapse' + item.id}
                    aria-expanded="false"
                    aria-controls={'#collapse' + item.id}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_279_3687)">
                        <rect
                          x="29.5"
                          y="29.5"
                          width="29"
                          height="29"
                          rx="14.5"
                          transform="rotate(-180 29.5 29.5)"
                          stroke="white"
                        />
                        <path
                          d="M14.5 15.5V24H15.5V15.5L24 15.5V14.5L15.5 14.5V6L14.5 6V14.5L6 14.5L6 15.5L14.5 15.5Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_279_3687">
                          <rect
                            width="30"
                            height="30"
                            fill="white"
                            transform="translate(30 30) rotate(-180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                <div className="collapse-item-target row collapse" id={'collapse' + item.id}>
                  <div className="target-img col-lg-6 pointer-all">
                    <img src={Photo} alt="" />
                  </div>
                  <div className="target-text col-lg-4">
                    <p className="paragraph pointer-all">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Advantages;
