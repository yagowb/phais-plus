import { api } from ".";

export const getRegisters = async (accessToken) => {
  return await api.get("/registers", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const createRegister = async ({ cnpj, email, username, phone }) => {
  return await api.post("/registers", {
    cnpj,
    email,
    username,
    phone,
  });
};

export const approveRegister = async (accessToken, id) => {
  return await api.post(`/registers/${id}/approve`, null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const disapproveRegister = async (
  accessToken,
  id,
  disapprovalReason
) => {
  return await api.post(
    `/registers/${id}/disapprove`,
    {
      disapprovalReason,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
