import { api } from ".";

export const getUsers = async () => {
  return await api.get("/users");
};
