import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slice/user/user-slice';
import { storageReducer } from './slice/user/storage-slice';

const store = configureStore({
  reducer: {
    storage: storageReducer,
    user: userReducer,
  },
});

export default store;
