const express = require("express");
const router = express.Router();

module.exports = async (req, res) => {
  const artworkId = req.params.artworkId;
  const sqlSelect = "SELECT * FROM artwork WHERE artworkId = ?";
  connection.query(sqlSelect, [artworkId], (err, rows) => {
    if (err) {
      res.json({
        error: "Error retrieving artwork information",
      });
    } else {
      if (rows.length > 0) {
        const artwork = rows[0];
        res.json({
          success: true,
          artwork,
        });
      } else {
        res.json({
          success: false,
          message: "Artwork not found",
        });
      }
    }
  });
};
