module.exports = function (err, _, res, _) {
  res
    .status(err.response.status || 500)
    .json(err.response.data || { error: "Something broke!" });
};
