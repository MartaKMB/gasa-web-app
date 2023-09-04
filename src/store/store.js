import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import techniquesReducer from './techniquesSlice';
import audioReducer from './audioSlice';
import fileReducer from './fileSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    techniques: techniquesReducer,
    audio: audioReducer,
    file: fileReducer,
  },
});
