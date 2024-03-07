import { combineReducers } from 'redux';

import blogApi from './blogApi';
import serviceApi from './serviceApi';
import portfolioApi from './portfolio';
import usersApi from './usersApi';
import reviewsApi from './reviewsApi';

const reducers = combineReducers({
  [blogApi.reducerPath]: blogApi.reducer,
  [serviceApi.reducerPath]: serviceApi.reducer,
  [portfolioApi.reducerPath]: portfolioApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [reviewsApi.reducerPath]: reviewsApi.reducer,
});

export default reducers;
