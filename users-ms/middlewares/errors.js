module.exports = function (err, _, res, _) {
  let response = err.response?.data ||
    err.message || { error: "Something broke!" };
  response = typeof response !== "object" ? { error: response } : response;

  res.status(err.response?.status || err.status || 500).json(response);
};
