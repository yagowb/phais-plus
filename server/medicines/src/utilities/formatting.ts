export const formatResponse = (status: number, message: string, data?: any) => {
  return {
    status,
    json: { status, message, data },
  };
};
