modules.exports = function (err, req, res, next) {
  console.error("ERROR ", err.stack);
  res.status(500).json({ error: "Something broke!" });
};
