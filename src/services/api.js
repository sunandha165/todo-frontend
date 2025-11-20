import axios from "axios";

const BASE = "https://todo-backend-drqv.onrender.com/api";

const withAuth = (opts = {}) => {
    const token = localStorage.getItem("token");
    return token
        ? { ...opts, headers: { Authorization: `Bearer ${token}`, ...(opts.headers || {}) } }
        : opts;
};

// AUTH
export const registerUser = (data) =>
    axios.post(`${BASE}/auth/register`, data).then((r) => r.data);

export const loginUser = (data) =>
    axios.post(`${BASE}/auth/login`, data).then((r) => r.data);

// TASKS
export const getTasks = () =>
    axios.get(`${BASE}/task`, withAuth()).then((r) => r.data);

export const createTask = (task) =>
    axios.post(`${BASE}/task`, task, withAuth()).then((r) => r.data);

export const updateTask = (id, body) =>
    axios.put(`${BASE}/task/${id}`, body, withAuth()).then((r) => r.data);

export const deleteTask = (id) =>
    axios.delete(`${BASE}/task/${id}`, withAuth()).then((r) => r.data);
