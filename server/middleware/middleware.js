const infoMid = (req, res, next) => {
  console.log(
    `Time of request: ${new Date().toISOString()}\nRequest method: ${
      req.method
    }\nRequest path: ${req.path}\n`
  );
  next();
};

JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).send("No token provided");

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(403).send("Bearer token not found");

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    req.user = decodedToken;
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
  return next();
};

module.exports = {
  infoMid,
  verifyToken,
};
