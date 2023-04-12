import { createSlice } from '@reduxjs/toolkit';
import { getUser, logOut, logIn, register } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
    },

    [logIn.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
    },

    [logOut.fulfilled](state, { payload }) {
      state.isLoggedIn = false;
      state.user = { name: '', email: '' };
      state.token = null;
    },

    [getUser.pending](state) {
      state.isRefreshing = true;
    },
    [getUser.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.user = { ...payload };
      state.isRefreshing = false;
    },
    [getUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
