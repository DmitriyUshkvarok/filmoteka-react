import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    await axios.post('/users/logout', credentials);
  } catch (error) {
    console.log(error);
  }
});

const refreshCurrentUser = createAsyncThunk(
  'auth/refresh'
  //   async credentials => {
  //     try {
  //       const { data } = await axios.post('/users/refresh', credentials);
  //       return data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
);

const authOperation = {
  register,
  logIn,
  logOut,
  refreshCurrentUser,
};
export default authOperation;
