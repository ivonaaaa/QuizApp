import axiosInstance from "./axiosInstance";

export const loginUser = async ({ email, password }) => {
  const res = await axiosInstance.post("/users/login", { email, password });
  return res.data;
};

export const registerUser = async ({ email, password }) => {
  const res = await axiosInstance.post("users/register", { email, password });
  return res.data;
};
