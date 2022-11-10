import {configureStore} from '@reduxjs/toolkit';
import BottomNavigationReducer from './reducers/BottomNavigationReducer';
export const store = configureStore({
  reducer: {
    BottomNavigationReducer,
  },
});
