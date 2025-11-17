import axios from "axios";

// 🔥 Use your Render backend URL here
const BASE = "https://todo-backend-drqv.onrender.com/api";

// AUTH
export const registerUser = (data) =>
  axios.post(`${BASE}/auth/register`, data).then((res) => res.data);

export const loginUser = (data) =>
  axios.post(`${BASE}/auth/login`, data).then((res) => res.data);

// TASKS
export const getTasks = () =>
  axios
    .get(`${BASE}/task`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => res.data);

export const createTask = (task) =>
  axios
    .post(`${BASE}/task`, task, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => res.data);

export const updateTask = (id, body) =>
  axios
    .put(`${BASE}/task/${id}`, body, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => res.data);

export const deleteTask = (id) =>
  axios
    .delete(`${BASE}/task/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => res.data);
