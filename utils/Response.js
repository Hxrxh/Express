const sendErrorResponse = (res, err) => {
  let statusCode = err.statusCode;
  let message = err.message;

  return res.status(statusCode).json({
    message: message,
    status: false,
  });
};
const sendResponse = (res, data, statusCode) => {
  console.log(statusCode);
  return res.status(parseInt(statusCode)).json({
    data: data,
    status: true,
  });
};
module.exports = {
  sendErrorResponse,
  sendResponse,
};
