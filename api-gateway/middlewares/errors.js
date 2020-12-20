module.exports = function (err, _, res, _) {
  let status = err.response?.status || err.status || 500;
  if (err.errors) status = 400;

  console.log(err)
  
  res
    .status(status)
    .json(
      err.response?.data ||
        err.inner ||
        err.errors || { error: "Internal server error" }
    );
};
