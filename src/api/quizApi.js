import axiosInstance from "./axiosInstance";

export const GetAllQuizzes = async () => {
  const res = await axiosInstance.get("/quizzes");
  return res.data;
};

export const GetQuizById = async (id) => {
  const res = await axiosInstance.get(`/quizzes/${id}`);
  return res.data;
};
