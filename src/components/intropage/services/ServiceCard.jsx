import React from 'react';
import BtnSimple from '../../utils/btn/BtnSimple';
import { Link } from 'react-router-dom';

function ServiceCard({ id, title, text, svg = null }) {
  return (
    <div className="animate">
      <div className={`table-card show`} style={{ transition: 'height .5s ease-in-out' }}>
        <div className="table-card-body d-flex">
          <h4 className="table-card-body-title headline4">{title}</h4>
          <p className="table-card-body-about paragraph">{text}</p>
          {svg !== null && <img src={require(`./svg/${svg}`)} alt={title} />}
          <Link to={'/services/' + id} className="position-absolute">
            <BtnSimple>Подробнее</BtnSimple>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
