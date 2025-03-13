import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/board";

export const listBoard = () => axios.get(REST_API_BASE_URL);

export const selectBoard = (id) => axios.get(`${REST_API_BASE_URL}/${id}`);

export const createBoard = (board) => axios.post(`${REST_API_BASE_URL}/write`, board);

// mybatis
export const updateBoard = (id, board) => axios.post(`${REST_API_BASE_URL}/update/${id}`, board);
export const deleteBoard = (id) => axios.post(`${REST_API_BASE_URL}/delete/${id}`);

// export const updateBoard = (id, board) => axios.put(`${REST_API_BASE_URL}/update/${id}`, board);
//
// export const deleteBoard = (id) => axios.delete(`${REST_API_BASE_URL}/delete/${id}`);
