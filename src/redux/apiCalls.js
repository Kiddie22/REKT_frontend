import axios from 'axios';
import { loginFailure, loginStart } from './userRedux';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:3000/api/auth/login');
  } catch (error) {
    dispatch(loginFailure());
  }
};
