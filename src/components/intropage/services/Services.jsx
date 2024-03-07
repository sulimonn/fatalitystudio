import React from 'react';
import './services.css';
import ServiceCard from './ServiceCard';
import { useGetServicesQuery } from 'store/reducers/serviceApi';
function Services() {
  const { data: services = [] } = useGetServicesQuery();
  return (
    <div className="services" id="services">
      <h4 className="services-title headline3 pointer-all">Услуги</h4>
      <div className="services-container">
        <div className="grid-container">
          {services.map((item, index) => (
            <div className="grid-item" key={index}>
              <ServiceCard
                id={item.id}
                title={item.title}
                svg={item?.svg}
                text={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
