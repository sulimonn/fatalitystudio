// third-party
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

// project import
import reducers from './reducers';
import blogApi from './reducers/blogApi';
import serviceApi from './reducers/serviceApi';
import portfolioApi from './reducers/portfolio';
import usersApi from './reducers/usersApi';
import reviewsApi from './reducers/reviewsApi';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,
      serviceApi.middleware,
      portfolioApi.middleware,
      usersApi.middleware,
      reviewsApi.middleware,
    ),
});

const { dispatch } = store;

export { store, dispatch };

setupListeners(store.dispatch);
