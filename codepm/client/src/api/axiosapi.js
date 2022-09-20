import axios from "axios";

export const axiosapi = {
  getAPI: async (url) => {
    const result = await axios.get(USERS_REST_API_URL(url));
    return result;
  },
  postAPI: async (url, data) => {
    const result = await axios.post(USERS_REST_API_URL(url), data);
    return result;
  },
  putAPI: async (url, data) => {
    const result = await axios.put(USERS_REST_API_URL(url), data);
    return result;
  },
  deleteAPI: async (url) => {
    const result = await axios.delete(USERS_REST_API_URL(url));
    return result;
  },
};

const USERS_REST_API_URL = (url) => "http://localhost:9999/" + url;
