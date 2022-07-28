const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();
const config = require('./configVariables')

const {JWT_SECRET} = process.env

module.exports = {
  generateToken: (user) => {
    return jwt.sign({ user }, JWT_SECRET, { expiresIn: "1h" });
  },
  verifyToken: (token) => {
    return jwt.verify(token, JWT_SECRET )
  }
}