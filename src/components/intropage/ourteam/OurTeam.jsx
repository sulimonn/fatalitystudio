import React from 'react';
import './ourteam.css';
import TeamCard from './TeamCard';
import team_list from '../../data/team_data.js';

function OurTeam() {
  return (
    <div className="content">
      <h3 className="headline3">НАША Команда</h3>
      <div className="ourteam-items">
        {team_list.map((item) => {
          return <TeamCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default OurTeam;
