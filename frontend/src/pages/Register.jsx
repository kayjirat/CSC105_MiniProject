import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useContext } from "react";
import { Box, Button, CardContent, TextField } from "@mui/material";
import GlobalContext from "../context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../AxiosInstance";
import { AxiosError } from "axios";

const theme = createTheme();

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirm(event.target.value);
  };

  const validateForm = () => {
    let check = true;
    let updatedErrors = {};

    if (password !== confirm) {
      setPassword("");
      setConfirm("");
      updatedErrors = {
        ...updatedErrors,
        password: "Password and Confirm Password do not match",
      };
      check = false;
    }

    if (username === "") {
      updatedErrors = {
        ...updatedErrors,
        username: "Please enter your username",
      };
      check = false;
    }
    if (email === "") {
      updatedErrors = { ...updatedErrors, email: "Please enter your email" };
      check = false;
    }

    if (password === "") {
      updatedErrors = {
        ...updatedErrors,
        password: "Please enter your password",
      };
      check = false;
    }

    if (confirm === "") {
      updatedErrors = {
        ...updatedErrors,
        confirm: "Please enter your confirm password",
      };
      check = false;
    }

    setErrors({ ...updatedErrors });

    return check;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await Axios.post("/register", {
        username,
        password,
        email,
      });

      if (response.data.success) {
        // Handle success response
        console.log(response.data.message);
        navigate("/login");
      } else {
        // Handle error response
        setUsername("");
        setPassword("");
        setConfirm("");
        console.error(response.data.error);
        setErrors({ username: "Username is already exist" });
      }
    } catch (e) {
      // Handle Axios error
      setPassword("");
      setConfirm("");
      if (e instanceof AxiosError) {
        if (e.response) {
          // Handle error response
          console.error(e.response.data.error);
          navigate("/register");
        }
      }
    }
  };

  const bodyStyle = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ ...bodyStyle }}>
        <Container component="main" maxWidth="sm" sx={{ ...bodyStyle }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "white",
              px: 4,
              py: 3,
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontFamily: "Archivo" }}
            >
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="username"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                    value={username}
                    onChange={handleUsernameChange}
                    error={!!errors.username}
                    helperText={errors.username}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    type="email"
                    value={email}
                    error={!!errors.email}
                    helperText={errors.email}
                    onChange={handleEmailChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="password"
                    value={password}
                    error={!!errors.password}
                    helperText={errors.password}
                    onChange={handlePasswordChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirm password"
                    label="Confirm Password"
                    type="password"
                    id="confirm password"
                    autoComplete="new-password"
                    error={!!errors.confirm}
                    helperText={errors.confirm}
                    value={confirm}
                    onChange={handleConfirmPasswordChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Policy Agreement"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2, fontFamily: "Archivo" }}
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
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
export default RegisterPage;
