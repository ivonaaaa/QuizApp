const infoMid = (req, res, next) => {
  console.log(
    `Time of request: ${new Date().toISOString()}\nRequest method: ${
      req.method
    }\nRequest path: ${req.path}\n`
  );
  next();
};

module.exports = infoMid;
