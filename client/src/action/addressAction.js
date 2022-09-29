import { axiosapi } from "../api/axiosapi";
import {
  START_LOADING,
  STOP_LOADING,
  LOAD_ADDRESS_SUCCESS,
} from "./../constants/ApplicationTypes";

export const getAddress = async (url, dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    // setTimeout(async () => {
    //     const response = await axiosapi.getAPI(url);
    //     dispatch({ type: LOAD_CATEGORY_SUCCESS, payload: response.data });
    // }, 2000)
    const response = await axiosapi.getAPI(url);
    dispatch({ type: LOAD_ADDRESS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: STOP_LOADING });
  }
};
