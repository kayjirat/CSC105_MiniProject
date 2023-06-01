const express = require("express");
const router = express.Router();

module.exports = async (req, res) => {
        const artworkId = req.params.artworkId;
        console.log(artworkId);
        connection.query("SELECT * FROM artwork WHERE artworkId = ?", [artworkId], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error retrieving artwork id");
              } else if (result.length === 0) {
                res.status(404).send("Artwork not found");
              } else {
                res.json({
                  success: true,
                  message: "Found",
                  user: result,
                });
              }
        });

};