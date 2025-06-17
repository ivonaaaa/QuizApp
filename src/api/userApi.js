import axiosInstance from "./axiosInstance";

export const loginUser = async ({ email, password }) => {
  const res = await axiosInstance.post("/users/login", { email, password });
  return res.data;
};

export const GetAllUsers = async () => {
  const res = await axiosInstance.get("/users");
  return res.data;
};

export const GetUserById = async (id) => {
  const res = await axiosInstance.get(`/users/${id}`);
  return res.data;
};
