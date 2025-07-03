import axiosInstance from "./axiosInstance";

export const GetAllResults = async () => {
  const res = await axiosInstance.get("/results");
  return res.data;
};

export const GetResultById = async (id) => {
  const res = await axiosInstance.get(`/results/${id}`);
  return res.data;
};

export const GetResultsByUserId = async (userId) => {
  const res = await axiosInstance.get(`/results/user/${userId}`);
  return res.data;
};
