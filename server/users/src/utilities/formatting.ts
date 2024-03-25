export const formatResponse = (
  statusCode: number,
  message: string,
  data?: any
) => {
  return {
    statusCode,
    json: { statusCode, message, data },
  };
};
