import { api } from ".";

export const getRequests = async (accessToken) => {
  return await api.get("/requests", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
