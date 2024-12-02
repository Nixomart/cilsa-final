import axios from "axios";

export const login = async (user) => {
  const data = await axios.post("http://localhost:4000/api/login", user);
  return data;
};

export const register = async (user) => {
  const data = await axios.post("http://localhost:4000/api/register", user);
  return data;
};
