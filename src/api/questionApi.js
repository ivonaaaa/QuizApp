import axiosInstance from "./axiosInstance";

export const GetAllQuestions = async () => {
  const res = await axiosInstance.get("/questions");
  return res.data;
};

export const GetQuestionById = async (id) => {
  const res = await axiosInstance.get(`/questions/${id}`);
  return res.data;
};

export const GetQuestionsByQuizId = async (quizId) => {
  const res = await axiosInstance.get(`/questions/byQuiz/${quizId}`);
  return res.data;
};
