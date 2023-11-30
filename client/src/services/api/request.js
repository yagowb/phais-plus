import { api } from ".";

export const getRequests = async (accessToken) => {
  return await api.get("/requests", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const createRequest = async (
  accessToken,
  {
    hospitalId,
    medicationId,
    priorityId,
    statusId,
    description,
    dueDate,
    returnDate,
    quantity,
  }
) => {
  return await api.post(
    "/requests",
    {
      hospital_id: hospitalId,
      medication_id: medicationId,
      priority_id: priorityId,
      status_id: statusId,
      description: description,
      due_date: dueDate,
      return_date: returnDate,
      quantity: quantity,
    },
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
};
