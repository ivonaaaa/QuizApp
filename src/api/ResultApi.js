import axiosInstance from "./axiosInstance";

export const GetResultsByUserId = async (userId) => {
  const res = await axiosInstance.get(`/results/user/${userId}`);
  return res.data;
};
