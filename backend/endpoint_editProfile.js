const express = require("express");
const mysql = require("mysql2");
const router = express.Router();

module.exports = async (req, res) => {
  const userId = req.params.userId;
  const update = req.body;
  console.log(update);

  const sqlUpdate = mysql.format(
    "UPDATE user SET username = ?, email = ?, bio = ? WHERE userId = ?",
    [update.username, update.email, update.bio, userId]
  );
  console.log(sqlUpdate);
  const { err, results } = connection.query(sqlUpdate);

  if (err) {
    console.log(err);
    res.json({
      success: false,
      data: null,
      error: err.message,
    });
  } else {
    console.log(`User ${userId} updated successfully`);
    res.json({
      success: true,
      data: results,
    });
  }
};
