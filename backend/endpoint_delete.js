const express = require("express");
const router = express.Router();

module.exports = async (req, res) => {
  const userId = req.params.userId;
  const sqlSelect = "DELETE FROM user WHERE userId = ?";
  connection.query(sqlSelect, [userId], (err, rows) => {
    if (err) {
      res.json({
        error: "error",
      });
    } else {
      res.json({
        message: "delete successful",
      });
    }
  });
};
