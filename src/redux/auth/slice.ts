import { createSlice } from '@reduxjs/toolkit';

import { StatusForAll } from '../../utils/status';

import { signIn } from './operations';

interface AuthState {
  user: {
    name: string;
  };

  status: string;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: {
    name: '',
  },

  status: StatusForAll.init,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  reducers: {},
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signIn.pending, state => {
        state.status = StatusForAll.loading;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = StatusForAll.success;

        state.user = {
          name: action.payload ? action.payload.name : 'NO NAME',
        };
        state.isLoggedIn = true;
      })
      .addCase(signIn.rejected, state => {
        state.status = StatusForAll.error;
        state.user = initialState.user;
      });
  },
});
export default authSlice.reducer;
