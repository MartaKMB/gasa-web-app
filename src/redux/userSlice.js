import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userData',
  initialState: {
    userName: JSON.parse(localStorage.getItem('userNameWithPermission')) || '',
    userPermission: localStorage.getItem('hasUserPermission') || false,
  },
  reducers: {
    setNameAction: (state, action) => {
      localStorage.setItem(
        'userNameWithPermission',
        JSON.stringify(action.payload)
      );
      state.userName = action.payload;
    },
    setPermissionAction: (state) => {
      localStorage.setItem('hasUserPermission', JSON.stringify(true));
      state.userPermission = true;
    },
  },
});

export const { setNameAction, setPermissionAction } = userSlice.actions;

export default userSlice.reducer;
