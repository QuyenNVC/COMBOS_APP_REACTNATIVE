import {createSlice} from '@reduxjs/toolkit';

export const BottomNavigationSlice = createSlice({
  name: 'BottomNavigation',
  initialState: {
    show: false,
  },
  reducers: {
    change: (state, {payload}) => {
      state.show = payload;
    },
  },
});

const {reducer} = BottomNavigationSlice;
export default reducer;
