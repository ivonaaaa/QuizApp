import axiosInstance from "./axiosInstance";

export const GetQuestionsByQuizId = async (quizId) => {
  const res = await axiosInstance.get(`/questions/byQuiz/${quizId}`);
  return res.data;
};
