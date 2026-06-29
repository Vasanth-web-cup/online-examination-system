import axios from "axios";

const api = axios.create({
  baseURL: "https://online-examination-backend-production.up.railway.app/api"
});

// 🔐 Attach token properly
api.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;