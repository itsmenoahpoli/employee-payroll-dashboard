import axios from "axios";

export const axiosInstance = () => {
  return axios.create({
    baseURL: "http://localhost:8000/api/v1",
  });
};
