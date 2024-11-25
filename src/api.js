// src/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Correct URL for your backend
});

export default api;
