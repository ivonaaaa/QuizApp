import axiosInstance from "./axiosInstance";

export const GetAllAnswers = async () => {
  const res = await axiosInstance.get("/answers");
  return res.data;
};

export const GetAnswerById = async (id) => {
  const res = await axiosInstance.get(`/answers/${id}`);
  return res.data;
};
