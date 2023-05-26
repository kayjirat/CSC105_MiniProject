const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

module.exports = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const salt1 = await bcrypt.genSalt(10);
    console.log("Salt #1: ", salt1);
    const hash1 = await bcrypt.hash(password, salt1);
    console.log("Hash #1: ", hash1);

    var sql = mysql.format(
      "INSERT INTO users (username, password, email) VALUES ( ?, ?, ?)",
      [username, hash1, email]
    );

    connection.query(sql, (err, rows) => {
      if (err) {
        return res.json({
          success: false,
          data: null,
          error: err.message,
        });
      }
      res.json({
        success: true,
        message: "User has been created",
      });
    });
  };
