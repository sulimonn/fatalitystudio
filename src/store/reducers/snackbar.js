// actions
export const openSnackbar = (message, severity) => {
  return {
    type: 'OPEN_SNACKBAR',
  };
};

export const closeSnackbar = () => {
  return { type: 'CLOSE_SNACKBAR' };
};

const initialState = {
  open: false,
};

const snackbar = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_SNACKBAR':
      return {
        ...state,
        open: true,
      };
    case 'CLOSE_SNACKBAR':
      return { ...state, open: false };
    default:
      return state;
  }
};

export default snackbar;
