import axiosClient from "../utils/axiosClient";

// AUTH
export const registerUser = (data) =>
  axiosClient.post("/api/auth/register", data).then((r) => r.data);

export const loginUser = (data) =>
  axiosClient.post("/api/auth/login", data).then((r) => r.data);

// TASKS
export const getTasks = () =>
  axiosClient.get("/api/task").then((r) => r.data);

export const createTask = (task) =>
  axiosClient.post("/api/task", task).then((r) => r.data);

export const updateTask = (id, body) =>
  axiosClient.put(`/api/task/${id}`, body).then((r) => r.data);

export const deleteTask = (id) =>
  axiosClient.delete(`/api/task/${id}`).then((r) => r.data);
