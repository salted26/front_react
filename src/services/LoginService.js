import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/user";

export const login = (userData) => axios.post(`${REST_API_BASE_URL}/login`, userData);

export const signup = (userData) => axios.post(`${REST_API_BASE_URL}/signup`, userData);