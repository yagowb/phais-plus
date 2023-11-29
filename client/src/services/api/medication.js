import { api } from ".";

export const getMedications = async (accessToken) => {
  return await api.get("/medications", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
