import axiosInstance from "./axiosInstance";

export const GetAnswersByQuestionId = async (questionId) => {
  const res = await axiosInstance.get(`/answers/byQuestion/${questionId}`);
  return res.data;
};

export const SubmitQuizAnswers = async (userId, quizId, userAnswers) => {
  const res = await axiosInstance.post("/answers/submit", {
    userId,
    quizId,
    userAnswers,
  });
  return res.data;
};
