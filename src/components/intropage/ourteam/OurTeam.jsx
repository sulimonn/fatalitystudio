import React from 'react';
import './ourteam.css';
import TeamCard from './TeamCard';
import { useGetUsersQuery } from 'store/reducers/usersApi';

import { Box, CircularProgress } from '@mui/material';

function OurTeam() {
  const { data: team_list = [], isFetching } = useGetUsersQuery();
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="300px" width="100%">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <div className="content">
      <h3 className="headline3 pointer-all">НАША Команда</h3>
      <div className="ourteam-items">
        {team_list.map((item) => {
          return <TeamCard key={item.id} id={item.id} />;
        })}
      </div>
    </div>
  );
}

export default OurTeam;
