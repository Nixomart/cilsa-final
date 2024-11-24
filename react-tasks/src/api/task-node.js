import axios from "axios";

export const getAlltASK = async () => {
  const data = await axios.get("http://localhost:4000/api/tasks");
  return data;
};
export const getTaskById = async (id) => {
  const data = await axios.get(`http://localhost:4000/api/tasks/${id}`);
  return data;
};
export const createTask = async (task) => {
  const data = await axios.post("http://localhost:4000/api/tasks", task);
  return data;
};
export const deleteTask = async (id) => {
  const data = await axios.delete(`http://localhost:4000/api/tasks/${id}`);
  return data;
};
export const updateTask = async (id, task) => {
  const data = await axios.put(`http://localhost:4000/api/tasks/${id}`, task);
  return data;
};
