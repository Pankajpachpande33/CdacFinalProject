import axios from "axios";

export const axiosapi = {
  getAPI: async (url) => {
    const result = await axios.get(getServiceAPIURL(url));
    return result;
  },
  postAPI: async (url, data) => {
    const result = await axios.post(getServiceAPIURL(url), data);
    return result;
  },
  putAPI: async (url, data) => {
    const result = await axios.put(getServiceAPIURL(url), data);
    return result;
  },
  deleteAPI: async (url) => {
    const result = await axios.delete(getServiceAPIURL(url));
    return result;
  },
};

const getServiceAPIURL = (url) => `${process.env.REACT_APP_API_URL}${url}`;
