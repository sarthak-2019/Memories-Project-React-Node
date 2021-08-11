import * as api from "../api";
// Action Creators
import { FETCH_ALL, CREATE } from "../constants/actionTypes";
export const getPosts = () => async (dispatch) => {
  console.log("sarthak");
  try {
    const { data } = await api.fetchPosts();
    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost = (post) => async (dispatch) => {
  console.log("shukla");
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
