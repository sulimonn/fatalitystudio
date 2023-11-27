import React from 'react';
import './services.css';
import ServiceCard from './ServiceCard';
import services from '../../data/services_list.js';
function Services() {
  return (
    <div className="services" id="services">
      <h4 className="services-title headline3">Услуги</h4>
      <div className="services-container">
        <div className="grid-container">
          {services.map((item, index) => (
            <div className="grid-item" key={index}>
              <ServiceCard id={item.id} title={item.title} svg={item.svg} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
