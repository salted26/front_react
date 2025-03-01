import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/board";

export const listBoard = () => axios.get(REST_API_BASE_URL);

export const selectBoard = (no) => axios.get(`${REST_API_BASE_URL}/${no}`);

export const createBoard = (board) => axios.post(`${REST_API_BASE_URL}/write`, board);