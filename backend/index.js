const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const cors = require("cors");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_rlxzc",
  password: "JXAXkdeXAcvdJFRI",
  database: "lab_blank01_r3wolu",
});

connection.connect(() => {
  console.log("Database is connected");
});

// Export connection to use in other files
global.connection = connection;

// Create express app
const app = express();
const port = 4000;

// Enable CORS for requests from http://localhost:5173
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

// Register endpoints
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.post("/login", require("./endpoint_login"));
app.post("/register", require("./endpoint_register"));
app.get("/check", require("./endpoint_check_login"));

app.get("/artwork/:artworkId", require("./endpoint_artwork"));

app.get("/user/:userId", require("./endpoint_user"));
app.patch("/editProfile/:userId", require("./endpoint_editProfile"));

app.delete("/user", (req, res) => {
  const userId = req.query.userId;
  // console.log(userId);
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
  // res.send("Hello World!");
});

// app.get("/:userId", require("./user"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
