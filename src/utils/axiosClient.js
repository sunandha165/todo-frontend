import axios from "axios";

const axiosClient = axios.create({
   baseURL: "https://todo-backend-drqv.onrender.com/api"
});

// Automatically attach token to every request
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosClient;
