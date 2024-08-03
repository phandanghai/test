import axios from 'axios';
import { getUserFailure, getUserStart, getUserSuccess } from '../slider/UserSlider';

export const ApiGetListUser = async (dispatch, page) => {
  try {
    dispatch(getUserStart());
    const result = await axios.get(`https://randomuser.me/api/?page=${page}&results=10`);
    dispatch(getUserSuccess(result.data.results));
  } catch (error) {
    dispatch(getUserFailure(0));
    console.log('Error GetListUser', error);
  }
};
