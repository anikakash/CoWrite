import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const fetchData = async (url, params = {}) => {
  try {
    const res = await api.get(url, { params });
    return res;
  } catch (error) {
    throw new Error(error.message || "API Error");
  }
};

export default api;
