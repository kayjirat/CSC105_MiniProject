import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import Axios from "../AxiosInstance";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!validateForm()) return;
      const response = await Axios.post("/login", {
        email,
        password,
      });
      if (response.data.success) {
        // localStorage.setItem("token", response.data.token);
        // localStorage.setItem("userId", response.data.user.id);
        console.log("success");
        navigate("/home");
      } else {
        setEmail("");
        setPassword("");
        setEmailError("Incorrect email");
        setPasswordError("Incorrect password");
      }
    } catch (e) {
      setEmail("");
      setPassword("");
      if (e instanceof AxiosError) {
        if (e.response) return console.log(e.message);
      }
      return console.log(e.message);
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (email == "") {
      setEmailError("Email is required");
      isValid = false;
    }
    if (password == "") {
      setPasswordError("Password is required");
      isValid = false;
    }
    return isValid;
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
      <Container component="main" maxWidth="xs">
        <Box
          className="containerLogin"
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            padding: "10%",
            borderRadius: "2%",
          }}
        >
          <Typography component="h1" variant="h5" sx={{fontFamily: "Archivo" }}>
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              helperText={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              id="loginButton"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontFamily: "Archivo"  }}
              style={{
                backgroundColor: "black",
                border: "none",
                color: "white",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/register"
                  href="/register"
                  variant="body2"

                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default LoginPage;
