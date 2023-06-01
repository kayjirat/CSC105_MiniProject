import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  //for route "Let's Explore button" => login page
  let navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          color: "white",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
          fontFamily: "Lora",
        }}
      >
        <h1 style={{ fontSize: "4rem" }}>ART COLLECTION</h1>
        <br />
        <p style={{ fontSize: "2rem" }}>
          Art washes away from the soul the dust of everyday life. ― Pablo
          Picasso
        </p>
        <button
          style={{
            backgroundColor: "white",
            border: "none",
            color: "black",
            padding: "15px 40px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
          }}
          sx={{ fontFamily: "Archivo" }}
          onClick={() => handleClick("/login")}
        >
          Let's Explore !
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
