import { api } from ".";

export const getRegisters = async () => {
  return await api.get("/registers");
};

export const createRegister = async ({ cnpj, email, username, phone }) => {
  return await api.post("/registers", {
    cnpj,
    email,
    username,
    phone,
  });
};

export const approveRegister = async (id) => {
  return await api.post(`/registers/${id}/approve`, null);
};

export const disapproveRegister = async (id, disapprovalReason) => {
  return await api.post(`/registers/${id}/disapprove`, {
    disapprovalReason,
  });
};
