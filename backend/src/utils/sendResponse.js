function sendResponse(res, status, message, data) {
  const response = {};

  if (status) response.status = status;
  if (message) response.message = message;
  if (data) response.data = data;


  return res.status(status).json(response);
}

export default sendResponse;