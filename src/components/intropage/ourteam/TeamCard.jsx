import React from 'react';

function TeamCard({ data }) {
  console.log(data);
  return (
    <div className="ourteam-item row">
      <div className="img col-lg-4">
        <img src={require('../../../images/team/' + data.src)} alt="" />
      </div>
      <div className="info col-lg-8">
        <h6 className="dsc1">{data.name}</h6>
        <p className="paragraph">{data.position}</p>
      </div>
    </div>
  );
}

export default TeamCard;
