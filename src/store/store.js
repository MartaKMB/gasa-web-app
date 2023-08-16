import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import techniquesReducer from './techniquesSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    techniques: techniquesReducer,
  },
});
