import { api } from ".";

export const authenticate = async ({ cnpj, password }) => {
  return await api.post("/auth/authenticate", {
    cnpj,
    password,
  });
};
