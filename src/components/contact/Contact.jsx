import React, { useState } from 'react';
import './contact.css';
import BtnBlue from 'components/utils/btn/BtnBlue.jsx';
import { useAddTaskMutation, useGetServicesQuery } from 'store/reducers/serviceApi';

import { FormHelperText } from '@mui/material';

// redux
import { useDispatch } from 'react-redux';
import { openSnackbar } from 'store/reducers/snackbar';

function Contact() {
  const { data: services = [] } = useGetServicesQuery();
  const [addTask] = useAddTaskMutation();
  const [task, setTask] = useState({});
  const [selectedOption, setSelectedOption] = useState('Интересующая услуга');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [errors, setErrors] = useState();
  const [unsetOption, setUnsetOpt] = useState(selectedOption);

  const dispatch = useDispatch();

  const handleSelectChange = (option) => {
    setSelectedOption(() => option);
    setErrors({ ...errors, service_id: null });
    setTask({ ...task, service_id: option.id });
    setDropdownOpen(false);
    setUnsetOpt(() => option);
  };

  const handleMouseOver = (option) => {
    setSelectedOption(option);
  };

  const handleMouseLeave = () => {
    console.log('1');
    setSelectedOption(unsetOption);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.service_id) {
      setErrors({ ...errors, service_id: 'Поле не может остаться пустым' });
    }
    const isValidPhoneNumber = /^\+7 \d{3} \d{3} \d{2} \d{2}$/.test(task.phone_number);
    if (!task.phone_number || !task.name) {
      setErrors({ ...errors, phone_number: 'Поле не может остаться пустым' });
    }
    if (!isValidPhoneNumber) {
      setErrors({ ...errors, phone_number: 'Номер телефона введен некорректно' });
    } else {
      const response = await addTask(task);

      if (response.error) setErrors(response.error.data);
      else {
        setTask({});
        setSelectedOption('Интересующая услуга');
        setUnsetOpt('Интересующая услуга');
        dispatch(openSnackbar());
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(task);
    if (name !== 'phone_number') setTask({ ...task, [name]: value });
    else {
      const digitsOnly = value.replace(/\D/g, '');

      let formattedValue = '';
      if (digitsOnly === '7') {
        // If the input contains only "+7", set it to an empty string
        formattedValue = '';
      } else if (digitsOnly.length > 0) {
        formattedValue = '+7';
        if (digitsOnly.length > 1) {
          formattedValue += ' ' + digitsOnly.slice(1, 4);
        }
        if (digitsOnly.length > 4) {
          formattedValue += ' ' + digitsOnly.slice(4, 7);
        }
        if (digitsOnly.length > 7) {
          formattedValue += ' ' + digitsOnly.slice(7, 9);
        }
        if (digitsOnly.length > 9) {
          formattedValue += ' ' + digitsOnly.slice(9, 11);
        }
      }
      setTask({ ...task, [name]: formattedValue });
    }
    setErrors({ ...errors, [name]: null });
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <div className="contact-text">
          <div className="contact-text-title">
            <h3 className="headline3 pointer-all">Давайте обсудим ваш проект прямо сейчас</h3>
            <p className="dsc1 pointer-all">Оставьте свой номер и мы вам перезвоним</p>
          </div>
          <div className="contact-text-footer">
            <svg
              className="pointer-all"
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
        <form action="" className="contact-form" onSubmit={handleSubmit}>
          <input
            placeholder="Ваше имя"
            className={`form-item pointer-all ${Boolean(errors?.name) && ' error-input'}`}
            type="text"
            name="name"
            id="name"
            value={task?.name || ''}
            onChange={handleChange}
          />
          {errors?.name && (
            <FormHelperText
              error
              id="standard-weight-helper-text-name"
              sx={{ alignSelf: 'flex-start', ml: 2 }}
            >
              {errors.name}
            </FormHelperText>
          )}
          <input
            value={task?.phone_number || ''}
            onChange={handleChange}
            name="phone_number"
            className={`form-item pointer-all ${Boolean(errors?.phone_number) && ' error-input'}`}
            placeholder="+7 999 999 99 99"
            type="tel"
            id="phone"
          />
          {errors?.phone_number && (
            <FormHelperText
              error
              id="standard-weight-helper-text-phone"
              sx={{ alignSelf: 'flex-start', ml: 2 }}
            >
              {errors.phone_number}
            </FormHelperText>
          )}
          <div
            className="custom-dropdown pointer-all"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <div
              className={`dropdown-arrow ${isDropdownOpen ? 'rotate-arrow' : 'unset-arrow'}`}
            ></div>
            <div
              className={`selected-option ${isDropdownOpen ? 'open' : ''} ${
                Boolean(errors?.service_id) && ' error-input'
              }`}
            >
              {selectedOption.title || 'Интересующая услуга'}
            </div>
            <input
              type="hidden"
              name="service_id"
              value={selectedOption.id || ''}
              required
              onChange={handleChange}
            />
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

          {errors?.service_id && (
            <FormHelperText
              error
              id="standard-weight-helper-text-service_id"
              sx={{ alignSelf: 'flex-start', ml: 2 }}
            >
              {errors.service_id}
            </FormHelperText>
          )}
          <div className="form-text form-item">
            <p className="dsc2 pointer-all">
              При нажатии на кнопку “Обсудить проект”, вы соглашаетесь с политикой
              конфиденциальности сайта
            </p>
          </div>
          <BtnBlue type="submit">Обсудить проект</BtnBlue>
        </form>
      </div>
    </div>
  );
}

export default Contact;
