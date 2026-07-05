// import api from "./axios";

// export const getTasks = async (page = 1, pageSize = 20) => {
//   const response = await api.get(`/tasks?page=${page}&pageSize=${pageSize}`);
//   return response.data;
// };

// export const getTaskById = async (id: string) => {
//   const response = await api.get(`/tasks/${id}`);
//   return response.data;
// };
import api from "./axios";

export const getTasks = async (page = 1, pageSize = 20) => {
  const response = await api.get(`/tasks?page=${page}&pageSize=${pageSize}`);
  return response.data;
};

export const getTaskById = async (id: string) => {
  const response = await api.get(`/tasks/${id}`);
  return response.data;
};
