import axios from "axios";

// ⭐ USE YOUR REAL BACKEND URL HERE
const BASE = "https://todo-backend-drqv.onrender.com/api";

// Always include token when available
axios.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// AUTH
export const registerUser = (data) =>
  axios.post(`${BASE}/auth/register`, data).then((r) => r.data);

export const loginUser = (data) =>
  axios.post(`${BASE}/auth/login`, data).then((r) => r.data);

// TASKS
export const getTasks = () =>
  axios.get(`${BASE}/task`).then((r) => r.data);

export const createTask = (task) =>
  axios.post(`${BASE}/task`, task).then((r) => r.data);

export const updateTask = (id, body) =>
  axios.put(`${BASE}/task/${id}`, body).then((r) => r.data);

export const deleteTask = (id) =>
  axios.delete(`${BASE}/task/${id}`).then((r) => r.data);
