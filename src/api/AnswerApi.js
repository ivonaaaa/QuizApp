import axiosInstance from "./axiosInstance";

export const GetAllAnswers = async () => {
  const res = await axiosInstance.get("/answers");
  return res.data;
};

export const GetAnswerById = async (id) => {
  const res = await axiosInstance.get(`/answers/${id}`);
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
