import React, { useState } from 'react';
import './contact.css';
import services from '../data/services_list.js';
import BtnBlue from '../utils/btn/BtnBlue.jsx';

function Contact() {
  const [selectedOption, setSelectedOption] = useState('Интересующая услуга');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [unsetOption, setUnsetOpt] = useState(selectedOption);
  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    setUnsetOpt(selectedOption);
  };

  const handleMouseOver = (option) => {
    setSelectedOption(option);
  };

  const handleMouseLeave = () => {
    setSelectedOption(unsetOption);
  };

  return (
    <div className="contact">
      <div className="contact-content" id="contact">
        <div className="contact-text">
          <div className="contact-text-title">
            <h3 className="headline3">Давайте обсудим ваш проект прямо сейчас</h3>
            <p className="dsc1">Оставьте свой номер и мы вам перезвоним</p>
          </div>
          <div className="contact-text-footer">
            <svg
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="#A9A9A9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="5.94922" y="3.40039" width="1.7" height="13.6" fill="#A9A9A9" />
              <rect
                x="13.5996"
                y="9.34961"
                width="1.7"
                height="13.6"
                transform="rotate(90 13.5996 9.34961)"
                fill="#A9A9A9"
              />
              <rect
                x="11.0078"
                y="4.79102"
                width="1.7"
                height="13.6"
                transform="rotate(45 11.0078 4.79102)"
                fill="#A9A9A9"
              />
              <rect
                x="1.39062"
                y="5.99316"
                width="1.7"
                height="13.6"
                transform="rotate(-45 1.39062 5.99316)"
                fill="#A9A9A9"
              />
            </svg>
            <svg
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="#A9A9A9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="5.94922" y="3.40039" width="1.7" height="13.6" fill="#A9A9A9" />
              <rect
                x="13.5996"
                y="9.34961"
                width="1.7"
                height="13.6"
                transform="rotate(90 13.5996 9.34961)"
                fill="#A9A9A9"
              />
              <rect
                x="11.0078"
                y="4.79102"
                width="1.7"
                height="13.6"
                transform="rotate(45 11.0078 4.79102)"
                fill="#A9A9A9"
              />
              <rect
                x="1.39062"
                y="5.99316"
                width="1.7"
                height="13.6"
                transform="rotate(-45 1.39062 5.99316)"
                fill="#A9A9A9"
              />
            </svg>
            <svg
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="#A9A9A9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="5.94922" y="3.40039" width="1.7" height="13.6" fill="#A9A9A9" />
              <rect
                x="13.5996"
                y="9.34961"
                width="1.7"
                height="13.6"
                transform="rotate(90 13.5996 9.34961)"
                fill="#A9A9A9"
              />
              <rect
                x="11.0078"
                y="4.79102"
                width="1.7"
                height="13.6"
                transform="rotate(45 11.0078 4.79102)"
                fill="#A9A9A9"
              />
              <rect
                x="1.39062"
                y="5.99316"
                width="1.7"
                height="13.6"
                transform="rotate(-45 1.39062 5.99316)"
                fill="#A9A9A9"
              />
            </svg>
          </div>
        </div>
        <form action="" className="contact-form">
          <input
            placeholder="Ваше имя"
            className="form-item"
            type="text"
            name="name"
            id="name"
            required
          />
          <input
            placeholder="+7 999 999 99 99"
            className="form-item"
            type="tel"
            name="phone"
            id="phone"
            required
          />
          <input type="text" name="service" readOnly value={selectedOption.id} hidden />
          <div className="custom-dropdown" onClick={() => setDropdownOpen(!isDropdownOpen)}>
            <div
              className={`dropdown-arrow ${isDropdownOpen ? 'rotate-arrow' : 'unset-arrow'}`}
            ></div>
            <div className={`selected-option ${isDropdownOpen ? 'open' : ''}`}>
              {selectedOption.title || 'Интересующая услуга'}
            </div>

            <ul
              onMouseLeave={() => handleMouseLeave()}
              className={`options-list`}
              style={{ height: isDropdownOpen ? 'auto' : 0 }}
            >
              {services.map((option) => (
                <li
                  onMouseOver={() => handleMouseOver(option)}
                  key={option.id}
                  onClick={() => handleSelectChange(option)}
                >
                  {option.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="form-text form-item">
            <p className="dsc2">
              При нажатии на кнопку “Обсудить проект”, вы соглашаетесь с политикой
              конфиденциальности сайта
            </p>
          </div>
          <BtnBlue type="submit" onClick={(e) => e.preventDefault()}>
            Обсудить проект
          </BtnBlue>
        </form>
      </div>
    </div>
  );
}

export default Contact;
