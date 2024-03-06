import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import { useGetUsersQuery } from 'store/reducers/usersApi';

function TeamCard({ id }) {
  const { data, isFetching } = useGetUsersQuery();

  console.log(id);
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="300px" width="100%">
        <CircularProgress />
      </Box>
    );
  }
  const author = data.find((item) => item.id === id);
  console.log(author);
  return (
    <div className="ourteam-item row">
      <div className="img col-lg-4">
        {author.avatar ? (
          <img
            loading="lazy"
            src={author.avatar}
            alt="avatar"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: 'primary.main',
              borderRadius: '50%',
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h1" color="textSecondary" textTransform="uppercase">
              {author.first_name ? author.first_name.charAt(0) : author.email.charAt(0)}
            </Typography>
          </Box>
        )}
      </div>
      <div className="info col-lg-8">
        <h6 className="dsc1">
          {author.first_name && author.last_name
            ? author.first_name + ' ' + author.last_name
            : author.username}
        </h6>
        <p className="paragraph">{author.position}</p>
      </div>
    </div>
  );
}

export default TeamCard;
