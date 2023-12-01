import { api } from ".";

export const getMedication = async (accessToken, id) => {
  return await api.get(`/medications/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const getMedications = async (accessToken) => {
  return await api.get("/medications", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
