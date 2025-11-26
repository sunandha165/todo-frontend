import axios from "axios";

// ⭐ Backend URL
const BASE = "https://todo-backend-drqv.onrender.com/api";

// ⭐ Function that returns axios config with token
const authConfig = () => {
  const token = localStorage.getItem("token");
  return token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : {};
};

// AUTH
export const registerUser = (data) =>
  axios.post(`${BASE}/auth/register`, data).then((r) => r.data);

export const loginUser = (data) =>
  axios.post(`${BASE}/auth/login`, data).then((r) => r.data);

// TASKS
export const getTasks = () =>
  axios.get(`${BASE}/task`, authConfig()).then((r) => r.data);

export const createTask = (task) =>
  axios.post(`${BASE}/task`, task, authConfig()).then((r) => r.data);

export const updateTask = (id, body) =>
  axios.put(`${BASE}/task/${id}`, body, authConfig()).then((r) => r.data);

export const deleteTask = (id) =>
  axios.delete(`${BASE}/task/${id}`, authConfig()).then((r) => r.data);
