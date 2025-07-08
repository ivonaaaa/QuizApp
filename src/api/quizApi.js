import axiosInstance from "./axiosInstance";

export const GetAllQuizzes = async () => {
  const res = await axiosInstance.get("/quizzes");
  return res.data;
};
