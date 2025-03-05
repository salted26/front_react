import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/board";

export const listBoard = () => axios.get(REST_API_BASE_URL);

export const selectBoard = (no) => axios.get(`${REST_API_BASE_URL}/${no}`);

export const selectPagination = (page, pageSize) => axios.get(`${REST_API_BASE_URL}?page=${page}&pageSize=${pageSize}`);

export const createBoard = (board) => axios.post(`${REST_API_BASE_URL}/write`, board);

// mybatis
// export const updateBoard = (no, board) => axios.post(`${REST_API_BASE_URL}/update/${no}`, board);
// export const deleteBoard = (no) => axios.post(`${REST_API_BASE_URL}/delete/${no}`);

export const updateBoard = (no, board) => axios.put(`${REST_API_BASE_URL}/update/${no}`, board);

export const deleteBoard = (no) => axios.delete(`${REST_API_BASE_URL}/delete/${no}`);
