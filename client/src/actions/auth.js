import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router.push("/");
  } catch (error) {
    console.log(error);
  }
  // axios
  //   .post("http://localhost:9000/user/signup", formData)
  //   .then((res) => {
  //     const { data } = res;
  //     dispatch({ type: AUTH, data });
  //     router.push("/");
  //   })
  //   .catch((err) => console.log(err));
};
