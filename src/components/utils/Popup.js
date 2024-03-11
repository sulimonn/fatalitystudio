import { useDispatch, useSelector } from 'react-redux';

import { Snackbar, Box, Typography } from '@mui/material';
import { closeSnackbar } from 'store/reducers/snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Popup = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.snackbar);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeSnackbar());
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="white"
      onClick={handleClose}
      sx={{ position: 'absolute', right: -28, top: -28 }}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Box
        onClose={handleClose}
        sx={{
          width: 'min-content',
          backgroundColor: 'white',
          borderRadius: '10px',
          color: 'black',
          mt: 5,
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {action}
        <svg
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.4241 21.0653L44.9926 24.6872L30.2687 39.1925C29.2851 40.1761 27.9914 40.6667 26.6926 40.6667C25.3938 40.6667 24.0874 40.171 23.0936 39.1798L16.0227 32.3275L19.5632 28.6751L26.6621 35.5554L41.4241 21.0653ZM61 30.5C61 47.3182 47.3182 61 30.5 61C13.6818 61 0 47.3182 0 30.5C0 13.6818 13.6818 0 30.5 0C47.3182 0 61 13.6818 61 30.5ZM55.9167 30.5C55.9167 16.4853 44.5148 5.08333 30.5 5.08333C16.4853 5.08333 5.08333 16.4853 5.08333 30.5C5.08333 44.5148 16.4853 55.9167 30.5 55.9167C44.5148 55.9167 55.9167 44.5148 55.9167 30.5Z"
            fill="#3CAF2A"
          />
        </svg>

        <Typography
          variant="h4"
          sx={{
            mt: 2,
            color: 'black',
            textTransform: 'uppercase',
            fontFamily: 'var(--ff-bowler)',
          }}
        >
          спасибо!
        </Typography>
        <Typography variant="subtitle2" sx={{ width: '80%', minWidth: '60%' }}>
          Мы перезвоним вам в ближайшее время.
        </Typography>
      </Box>
    </Snackbar>
  );
};

export default Popup;
