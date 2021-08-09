import * as api from "../api";
// Action Creators
import { FETCH_ALL } from "../constants/actionTypes";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
