import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/rooms";

export const listRooms = () => {
  return axios.get(REST_API_URL);
};

export const createRoom = (room) => {
  return axios.post(REST_API_URL, room);
};

export const getRoomById = (id) => {
  return axios.get(`${REST_API_URL}/${id}`);
};

export const updateRoom = (id, room) => {
  return axios.put(`${REST_API_URL}/${id}`, room);
};

export const deleteRoom = (id) => {
  return axios.delete(`${REST_API_URL}/${id}`);
};