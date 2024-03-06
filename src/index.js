import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

// third-party
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'store';

import './index.css';
import App from './App';

const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
    background: '#242424',
    primary: {
      main: '#A9A9A9',
      light: '#FFFFFF',
      dark: '#242424',
      contrastText: '#141416',
    },
    warning: {
      main: '#FFD951',
    },
    info: {
      main: '#08FFFC10',
      light: '#08FFFC',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: 'var(--ff-exo-2)',
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter basename="/">
        <ThemeProvider theme={defaultTheme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
);
