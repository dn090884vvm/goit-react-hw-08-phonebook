import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {}
});

// const getContacts = createAsyncThunk('auth/contacts', async () => {
//   try {
//     const { data } = await axios.get('/contacts');
//     console.log(data);
//     // token.unset();
//     return data;
//   } catch (error) {}
// });
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    // console.log(state)
    const persistedToken = state.auth.token;
    // console.log(token);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
      // return state;
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {}
  }
);

export const authOperations = {
  register: register,
  logIn: logIn,
  logOut: logOut,
  fetchCurrentUser: fetchCurrentUser,
  // token: token,
  // getContacts: getContacts,
};
