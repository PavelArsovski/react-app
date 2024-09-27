import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/dorms";

export const listDorms = () => {
  return axios.get(REST_API_URL);
};

export const createDorm = (dorm) => {
  return axios.post(REST_API_URL, dorm);
};

export const getDormById = (id) => {
  return axios.get(`${REST_API_URL}/${id}`);
};

export const updateDorm = (id, dorm) => {
  return axios.put(`${REST_API_URL}/${id}`, dorm);
};

export const deleteDorm = (id) => {
  return axios.delete(`${REST_API_URL}/${id}`);
};