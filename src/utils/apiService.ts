import { axiosInstance } from "./axiosService";

export const fetchDataAsync = async () => {
  return await axiosInstance.get("");
};
