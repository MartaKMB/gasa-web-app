import { createSlice } from '@reduxjs/toolkit';

const userNameWithPermission = JSON.parse(
  localStorage.getItem('userNameWithPermission')
);

const hasUserPermission = JSON.parse(localStorage.getItem('hasUserPermission'));

export const userSlice = createSlice({
  name: 'userData',
  initialState: {
    userName: userNameWithPermission || '',
    userPermission: hasUserPermission || false,
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
      localStorage.setItem('hasUserPermission', true);
      state.userPermission = true;
    },
  },
});

export const { setNameAction, setPermissionAction } = userSlice.actions;

export default userSlice.reducer;
