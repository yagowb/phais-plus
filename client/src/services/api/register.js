import { api } from ".";

export const createRegister = async ({ cnpj, email, username, phone }) => {
  return await api.post("/registers", {
    cnpj,
    email,
    username,
    phone,
  });
};
