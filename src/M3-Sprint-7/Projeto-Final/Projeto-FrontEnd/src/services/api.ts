import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-projeto-front-end.onrender.com",
  timeout: 8000,
});
