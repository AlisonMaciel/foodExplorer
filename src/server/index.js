import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-food-vzfi.onrender.com",
  withCredentials: true
})