import { configureStore } from '@reduxjs/toolkit';

// Import Reducer
import counterReducer from '../features/counter/counterSlice';

// Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
