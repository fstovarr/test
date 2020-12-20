module.exports = function (err, _, res, _) {
  let status = err.response?.status || 500;
  if (err.errors) status = 400;
  res
    .status(status)
    .json(
      err.response?.data || err.errors || { error: "Internal server error" }
    );
};
